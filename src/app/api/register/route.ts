import { NextResponse, NextRequest } from "next/server";
import { registerUserAction } from "@/actions/authenticate";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (session) {
      return NextResponse.json({ message: "You are already signed in" }, { status: 403 });
    }

    const { email, firstName, lastName, password } = await req.json();

    // Register the user
    const user = await registerUserAction({ email, firstName, lastName, password });

    // Return the user data
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    let errorMessage = "An error occurred during registration.";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }
}
