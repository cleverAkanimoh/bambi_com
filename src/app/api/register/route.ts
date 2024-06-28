import { NextResponse, NextRequest } from "next/server";
import { registerUserAction } from "@/actions/authenticate";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, lastName, password } = await req.json();

    const user = await registerUserAction({ email, firstName, lastName, password });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
}
