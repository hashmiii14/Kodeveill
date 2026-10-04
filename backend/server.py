from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import jwt
import bcrypt


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'kodeveil')
client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=3000)
db = client[db_name]

# JWT Config
JWT_SECRET = os.environ.get('JWT_SECRET', 'kodeveil-admin-secret-key-2024')
JWT_ALGORITHM = "HS256"
JWT_EXPIRY_HOURS = 24

# Security
security = HTTPBearer()

# Create the main app
app = FastAPI()

# Create routers
api_router = APIRouter(prefix="/api")
admin_router = APIRouter(prefix="/api/admin")


# ═══════════════════════════════════════════════════
#  MODELS
# ═══════════════════════════════════════════════════

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class EnquiryCreate(BaseModel):
    name: str
    email: str
    business: Optional[str] = "N/A"
    phone: Optional[str] = "N/A"
    message: str

class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    business: str = "N/A"
    phone: str = "N/A"
    message: str
    status: str = "new"  # new, read, replied
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class AdminLogin(BaseModel):
    username: str
    password: str

class PasswordChange(BaseModel):
    current_password: str
    new_password: str


# ═══════════════════════════════════════════════════
#  AUTH HELPERS
# ═══════════════════════════════════════════════════

def create_token(username: str) -> str:
    payload = {
        "sub": username,
        "exp": datetime.now(timezone.utc) + timedelta(hours=JWT_EXPIRY_HOURS),
        "iat": datetime.now(timezone.utc),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

def verify_token(token: str) -> dict:
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")

async def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    payload = verify_token(credentials.credentials)
    username = payload.get("sub")
    admin = await db.admins.find_one({"username": username}, {"_id": 0})
    if not admin:
        raise HTTPException(status_code=401, detail="Admin not found")
    return admin

async def ensure_default_admin():
    """Create default admin if none exists."""
    existing = await db.admins.find_one({"username": "admin"})
    if not existing:
        hashed = bcrypt.hashpw("kodeveil2024".encode("utf-8"), bcrypt.gensalt())
        await db.admins.insert_one({
            "username": "admin",
            "password_hash": hashed.decode("utf-8"),
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logging.getLogger(__name__).info("Default admin account created (admin / kodeveil2024)")


# ═══════════════════════════════════════════════════
#  PUBLIC API ROUTES
# ═══════════════════════════════════════════════════

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# ── Enquiry Submission (public) ──
@api_router.post("/enquiries")
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    doc = enquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.enquiries.insert_one(doc)
    return {"success": True, "id": enquiry.id}


# ═══════════════════════════════════════════════════
#  ADMIN ROUTES
# ═══════════════════════════════════════════════════

@admin_router.post("/login")
async def admin_login(body: AdminLogin):
    admin = await db.admins.find_one({"username": body.username}, {"_id": 0})
    if not admin:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not bcrypt.checkpw(body.password.encode("utf-8"), admin["password_hash"].encode("utf-8")):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_token(body.username)
    return {"token": token, "username": body.username}

@admin_router.get("/me")
async def admin_me(admin=Depends(get_current_admin)):
    return {"username": admin["username"]}

# ── Dashboard Stats ──
@admin_router.get("/dashboard")
async def admin_dashboard(admin=Depends(get_current_admin)):
    total_enquiries = await db.enquiries.count_documents({})
    new_enquiries = await db.enquiries.count_documents({"status": "new"})
    read_enquiries = await db.enquiries.count_documents({"status": "read"})
    replied_enquiries = await db.enquiries.count_documents({"status": "replied"})

    # Recent enquiries (last 7 days)
    week_ago = (datetime.now(timezone.utc) - timedelta(days=7)).isoformat()
    recent_count = await db.enquiries.count_documents({
        "created_at": {"$gte": week_ago}
    })

    # Latest 5 enquiries
    latest = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(5)

    return {
        "total_enquiries": total_enquiries,
        "new_enquiries": new_enquiries,
        "read_enquiries": read_enquiries,
        "replied_enquiries": replied_enquiries,
        "recent_week": recent_count,
        "latest_enquiries": latest,
    }

# ── Enquiries CRUD ──
@admin_router.get("/enquiries")
async def get_enquiries(admin=Depends(get_current_admin)):
    enquiries = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return enquiries

@admin_router.patch("/enquiries/{enquiry_id}")
async def update_enquiry_status(enquiry_id: str, body: dict, admin=Depends(get_current_admin)):
    status = body.get("status")
    if status not in ["new", "read", "replied"]:
        raise HTTPException(status_code=400, detail="Invalid status. Must be: new, read, or replied")

    result = await db.enquiries.update_one({"id": enquiry_id}, {"$set": {"status": status}})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return {"success": True}

@admin_router.delete("/enquiries/{enquiry_id}")
async def delete_enquiry(enquiry_id: str, admin=Depends(get_current_admin)):
    result = await db.enquiries.delete_one({"id": enquiry_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return {"success": True}

# ── Settings ──
@admin_router.post("/change-password")
async def change_password(body: PasswordChange, admin=Depends(get_current_admin)):
    if not bcrypt.checkpw(body.current_password.encode("utf-8"), admin["password_hash"].encode("utf-8")):
        raise HTTPException(status_code=400, detail="Current password is incorrect")

    new_hash = bcrypt.hashpw(body.new_password.encode("utf-8"), bcrypt.gensalt())
    await db.admins.update_one(
        {"username": admin["username"]},
        {"$set": {"password_hash": new_hash.decode("utf-8")}}
    )
    return {"success": True, "message": "Password updated successfully"}


# ═══════════════════════════════════════════════════
#  APP SETUP
# ═══════════════════════════════════════════════════

app.include_router(api_router)
app.include_router(admin_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup():
    try:
        await ensure_default_admin()
        logger.info("✅ Admin panel ready — visit http://localhost:3000/admin")
    except Exception as e:
        logger.warning(f"⚠️  MongoDB not reachable at startup: {e}")
        logger.warning("   The server will still run. Connect MongoDB to enable admin features.")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()