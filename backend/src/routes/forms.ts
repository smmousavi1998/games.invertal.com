import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { sendFormNotification } from "../services/email";

const prisma = new PrismaClient();
const router = Router();

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  meta: z.any().optional(),
});

router.post("/", async (req, res) => {
  try {
    const parsed = formSchema.parse(req.body);
    const created = await prisma.formSubmission.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        message: parsed.message,
        meta: parsed.meta || {},
      },
    });

    // send notification to admin
    sendFormNotification(created).catch((err) =>
      console.error("Failed to send form notification:", err)
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
