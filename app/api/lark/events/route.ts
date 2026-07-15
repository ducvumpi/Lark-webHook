import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("===== LARK BODY =====");
  console.log(JSON.stringify(body, null, 2));

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