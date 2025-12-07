import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { PrismaClient } from "@prisma/client";
import formsRouter from "./routes/forms";
import reservationsRouter from "./routes/reservations";
import adminRouter from "./routes/admin";

const prisma = new PrismaClient();
const app = express();

app.use(helmet());
app.use(express.json({ limit: "1mb" }));
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(
  rateLimit({
    windowMs: 60_000,
    max: 100,
  })
);

// Health
app.get("/health", (_req, res) => res.json({ ok: true }));

// public endpoints
app.use("/api/forms", formsRouter);
app.use("/api/reservations", reservationsRouter);

// admin endpoints
app.use("/api/admin", adminRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});
