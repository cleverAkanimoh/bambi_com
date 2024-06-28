import { NextResponse, NextRequest } from "next/server";
import { logOutUserAction } from "@/actions/authenticate";

export async function POST() {
  try {
    await logOutUserAction();
    return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Not logged out"}, { status: 400 });
  }
}
