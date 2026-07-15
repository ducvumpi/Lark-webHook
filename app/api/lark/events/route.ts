import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Lark Body:", body);

  if (body.type === "url_verification") {
    return NextResponse.json({
      challenge: body.challenge,
    });
  }

  return NextResponse.json({
    code: 0,
  });
}