import { NextResponse, NextRequest } from "next/server";
import { loginUserAction } from "@/actions/authenticate";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "../../../../../auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
