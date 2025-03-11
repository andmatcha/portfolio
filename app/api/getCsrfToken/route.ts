import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  // ランダムなCSRFトークンを生成
  const csrfToken = crypto.randomBytes(32).toString("hex");

  // CSRFトークンを返す
  return NextResponse.json({ csrfToken });
}
