import React, { useState } from "react";
import api, { setToken } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/admin/auth/login", { email, password });
      setToken(res.data.token);
      localStorage.setItem("admin_token", res.data.token);
      window.location.href = "/";
    } catch (er: any) {
      setErr(er?.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Admin Login</h2>
      <form onSubmit={submit}>
        <div>
          <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
}
