import "server-only";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // メール送信の設定
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `[PORTFOLIO] ${name} 様からの新規メッセージ`,
    text: `お名前: ${name}\nメールアドレス: ${email}\n\nお問い合わせ内容:\n${message}`,
  };

  try {
    // メール送信
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error}` },
      { status: 500 }
    );
  }
}
