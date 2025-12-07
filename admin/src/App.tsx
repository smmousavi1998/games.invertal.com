import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12 }}>
        <Link to="/">Dashboard</Link> | <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
