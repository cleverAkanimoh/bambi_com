import { NextResponse, NextRequest } from "next/server";
import { loginUserAction } from "@/actions/authenticate";

export async function POST(req: NextRequest) {
  try {
    const { email, password, callbackUrl } = await req.json();
    await loginUserAction({ email, password, callbackUrl });

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Login not successful" }, { status: 400 });
  }
}
