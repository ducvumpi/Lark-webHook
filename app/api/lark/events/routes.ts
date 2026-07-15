import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("========== LARK EVENT ==========");
  console.log(JSON.stringify(body, null, 2));

  // Challenge verification
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