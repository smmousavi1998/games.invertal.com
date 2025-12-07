import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { sendReservationNotification } from "../services/email";

const prisma = new PrismaClient();
const router = Router();

const reservationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  date: z.string().transform((s) => new Date(s)),
  guests: z.number().int().min(1),
  notes: z.string().optional(),
  meta: z.any().optional(),
});

router.post("/", async (req, res) => {
  try {
    const parsed = reservationSchema.parse(req.body);
    const created = await prisma.reservation.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        date: parsed.date,
        guests: parsed.guests,
        notes: parsed.notes,
        meta: parsed.meta || {},
      },
    });

    sendReservationNotification(created).catch((err) =>
      console.error("Failed to send reservation notification:", err)
    );

    res.status(201).json({ ok: true, id: created.id });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    console.error(err);
    res.status(500).json({ error: "internal_server_error" });
  }
});

export default router;
