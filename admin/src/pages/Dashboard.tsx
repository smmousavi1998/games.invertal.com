import React, { useEffect, useState } from "react";
import api, { setToken } from "../api";

type Form = any;
type Reservation = any;

export default function Dashboard() {
  const [forms, setForms] = useState<Form[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) setToken(token);
    fetchAll();
  }, []);

  async function fetchAll() {
    setLoading(true);
    try {
      const [f, r] = await Promise.all([api.get("/admin/forms"), api.get("/admin/reservations")]);
      setForms(f.data);
      setReservations(r.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Form Submissions</h2>
        {loading ? <p>Loading...</p> : (
          <ul>
            {forms.map((fm: any) => (
              <li key={fm.id}>
                {fm.name} — {fm.email} — {new Date(fm.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Reservations</h2>
        {loading ? <p>Loading...</p> : (
          <ul>
            {reservations.map((r: any) => (
              <li key={r.id}>
                {r.name} — {new Date(r.date).toLocaleString()} — {r.guests} guests
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
