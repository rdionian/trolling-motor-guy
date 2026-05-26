import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  const { name, phone, email, purchaseDate, issue } = await req.json();

  try {
    // Email to Bob
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Repair Inquiry — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Purchase:</strong> ${purchaseDate}</p>
        <p><strong>Issue:</strong></p>
        <p>${issue}</p>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message — The Trolling Motor Guy",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! We've received your message and will get back to you as soon as possible.</p>
        <p>If you need to reach us directly:</p>
        <p><strong>Phone:</strong> (941) 518-9940</p>
        <p><strong>Email:</strong> trollingmotorguy@gmail.com</p>
        <p><strong>Hours:</strong> Mon–Fri 8am–5pm, Sat 9am–2pm</p>
        <br />
        <p>— The Trolling Motor Guy</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}