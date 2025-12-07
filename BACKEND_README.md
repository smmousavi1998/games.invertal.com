```markdown
# Backend for games.invertal.com

Overview
- Node + Express (TypeScript)
- Prisma ORM (Postgres)
- JWT-based admin auth
- Nodemailer for notification emails
- Endpoints:
  - POST /api/forms - receive public form submissions
  - POST /api/reservations - receive reservations
  - POST /api/auth/login - admin login (returns JWT)
  - GET /api/admin/forms - list submissions (admin)
  - GET /api/admin/reservations - list reservations (admin)
  - GET /api/admin/form/:id - get single form
  - GET /api/admin/reservation/:id - get single reservation
  - PATCH /api/admin/form/:id - update status or add notes (admin)
  - PATCH /api/admin/reservation/:id - update status or add notes (admin)

Development
1. Create a Postgres database and set DATABASE_URL in .env
2. npm install
3. npx prisma migrate dev --name init
4. npx prisma generate
5. npm run dev

Environment variables (.env)
- DATABASE_URL=postgresql://user:pass@host:5432/dbname
- JWT_SECRET=your_jwt_secret
- ADMIN_EMAIL=admin@example.com
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (for nodemailer)
- FRONTEND_URL=http://localhost:3000 (for CORS)

Notes
- Protect the /api/admin/* routes with Authorization: Bearer <token>
- Create an admin user via Prisma or a small seed script
```