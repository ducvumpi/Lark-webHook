import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Webhook OK" });
}

export async function POST(req: Request) {
  const text = await req.text();

  console.log("========== RAW BODY ==========");
  console.log(text);

  let body: any = {};
  try {
    body = JSON.parse(text);
  } catch (e) {
    console.log("JSON parse failed");
  }

  console.log("========== JSON ==========");
  console.log(body);

  if (body.challenge) {
    return NextResponse.json({
      challenge: body.challenge,
    });
  }

  return NextResponse.json({
    code: 0,
    msg: "success",
  });
}