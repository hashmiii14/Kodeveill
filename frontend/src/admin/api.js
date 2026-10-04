const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

// ── Token Management ──
export const getToken = () => localStorage.getItem("kv_admin_token");
export const setToken = (token) => localStorage.setItem("kv_admin_token", token);
export const removeToken = () => localStorage.removeItem("kv_admin_token");
export const isAuthenticated = () => !!getToken();

const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

// ── Auth ──
export const adminLogin = async (username, password) => {
  const res = await fetch(`${API_BASE}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Login failed");
  }
  const data = await res.json();
  setToken(data.token);
  return data;
};

export const adminMe = async () => {
  const res = await fetch(`${API_BASE}/api/admin/me`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Unauthorized");
  return res.json();
};

// ── Dashboard ──
export const getDashboard = async () => {
  const res = await fetch(`${API_BASE}/api/admin/dashboard`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch dashboard");
  return res.json();
};

// ── Enquiries ──
export const getEnquiries = async () => {
  const res = await fetch(`${API_BASE}/api/admin/enquiries`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch enquiries");
  return res.json();
};

export const updateEnquiryStatus = async (id, status) => {
  const res = await fetch(`${API_BASE}/api/admin/enquiries/${id}`, {
    method: "PATCH",
    headers: authHeaders(),
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error("Failed to update");
  return res.json();
};

export const deleteEnquiry = async (id) => {
  const res = await fetch(`${API_BASE}/api/admin/enquiries/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete");
  return res.json();
};

// ── Settings ──
export const changePassword = async (currentPassword, newPassword) => {
  const res = await fetch(`${API_BASE}/api/admin/change-password`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ current_password: currentPassword, new_password: newPassword }),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Failed to change password");
  }
  return res.json();
};

// ── Public Enquiry Submission ──
export const submitEnquiry = async (formData) => {
  const res = await fetch(`${API_BASE}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error("Failed to submit");
  return res.json();
};
