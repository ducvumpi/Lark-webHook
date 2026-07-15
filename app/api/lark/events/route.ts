import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("BODY:", JSON.stringify(body));

  // Tạm thời trả nguyên body về
  return NextResponse.json(body);
}

export async function GET() {
  return NextResponse.json({ ok: true });
}