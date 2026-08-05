# Deploying Kodeveil on Vercel

This guide provides step-by-step instructions to deploy **Kodeveil** (React Frontend + FastAPI Backend) to **Vercel**.

---

## Method 1: Deploying via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if you made changes locally):
   ```bash
   git add .
   git commit -m "Configure Vercel deployment"
   git push origin main
   ```

2. **Connect Repository to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and log in.
   - Select your repository **`hashmiii14/Kodeveill`** and click **Import**.

3. **Configure Environment Variables**:
   In the Vercel Dashboard project configuration screen, add the following **Environment Variables**:

   | Name | Value | Description |
   |---|---|---|
   | `MONGO_URL` | `mongodb+srv://user:pass@cluster.mongodb.net/...` | Your MongoDB connection string |
   | `DB_NAME` | `kodeveil` | Your database name |
   | `CORS_ORIGINS` | `*` | Allowed CORS origins |

4. **Deploy**:
   - Keep the Root Directory as `./` (the repository root).
   - Click **Deploy**. Vercel will automatically read `vercel.json` to build the frontend and serve the Python FastAPI serverless functions under `/api`.

---

## Method 2: Deploying via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Preview / Production**:
   Run the following in the repository root directory:
   ```bash
   vercel
   ```
   To deploy directly to Production:
   ```bash
   vercel --prod
   ```

3. **Set Environment Variables via CLI**:
   ```bash
   vercel env add MONGO_URL
   vercel env add DB_NAME
   ```

---

## Architecture Summary

- **Frontend**: React Single-Page Application (CRA + CRACO) built to `frontend/build` and served with SPA client-side routing.
- **Backend API**: Python FastAPI (`backend/server.py`), routed via Vercel serverless function entrypoint (`api/index.py`).
- **Database**: MongoDB connected asynchronously via `motor`.
