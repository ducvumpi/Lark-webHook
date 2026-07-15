import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Webhook OK" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Lark Event:", JSON.stringify(body, null, 2));

    // URL Verification
    if (body.type === "url_verification") {
      return NextResponse.json({
        challenge: body.challenge,
      });
    }

    // Sau khi verify thành công, mọi event sẽ vào đây
    return NextResponse.json({
      code: 0,
      msg: "success",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { code: 500, msg: "error" },
      { status: 500 }
    );
  }
}