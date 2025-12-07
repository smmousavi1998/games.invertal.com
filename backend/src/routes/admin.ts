import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { authMiddleware } from "../middleware/auth";

const prisma = new PrismaClient();
const router = Router();

// login
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "missing_credentials" });

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) return res.status(401).json({ error: "invalid_credentials" });

  const match = await bcrypt.compare(password, admin.password);
  if (!match) return res.status(401).json({ error: "invalid_credentials" });

  const token = jwt.sign({ sub: admin.id, email: admin.email }, process.env.JWT_SECRET || "secret", {
    expiresIn: "8h",
  });
  res.json({ token });
});

// protected routes below
router.use(authMiddleware);

// list forms
router.get("/forms", async (req, res) => {
  const list = await prisma.formSubmission.findMany({ orderBy: { createdAt: "desc" } });
  res.json(list);
});

router.get("/form/:id", async (req, res) => {
  const { id } = req.params;
  const item = await prisma.formSubmission.findUnique({ where: { id } });
  if (!item) return res.status(404).json({ error: "not_found" });
  res.json(item);
});

router.patch("/form/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await prisma.formSubmission.update({
    where: { id },
    data,
  });
  res.json(updated);
});

// reservations
router.get("/reservations", async (req, res) => {
  const list = await prisma.reservation.findMany({ orderBy: { createdAt: "desc" } });
  res.json(list);
});

router.get("/reservation/:id", async (req, res) => {
  const { id } = req.params;
  const item = await prisma.reservation.findUnique({ where: { id } });
  if (!item) return res.status(404).json({ error: "not_found" });
  res.json(item);
});

router.patch("/reservation/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await prisma.reservation.update({
    where: { id },
    data,
  });
  res.json(updated);
});

export default router;
