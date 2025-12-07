import nodemailer from "nodemailer";
import { FormSubmission, Reservation } from "@prisma/client";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendFormNotification = async (form: FormSubmission) => {
  const admin = process.env.ADMIN_EMAIL;
  if (!admin) return;
  const html = `
    <h3>New Form Submission</h3>
    <p><strong>Name:</strong> ${form.name}</p>
    <p><strong>Email:</strong> ${form.email}</p>
    <p><strong>Message:</strong> ${form.message}</p>
    <p><em>Submitted at ${form.createdAt}</em></p>
  `;
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: admin,
    subject: `New form from ${form.name}`,
    html,
  });
};

export const sendReservationNotification = async (reservation: Reservation) => {
  const admin = process.env.ADMIN_EMAIL;
  if (!admin) return;
  const html = `
    <h3>New Reservation</h3>
    <p><strong>Name:</strong> ${reservation.name}</p>
    <p><strong>Email:</strong> ${reservation.email}</p>
    <p><strong>Date:</strong> ${new Date(reservation.date).toLocaleString()}</p>
    <p><strong>Guests:</strong> ${reservation.guests}</p>
    <p><em>Submitted at ${reservation.createdAt}</em></p>
  `;
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: admin,
    subject: `New reservation from ${reservation.name}`,
    html,
  });
};
