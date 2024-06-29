// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Define the paths that should be protected
const protectedRoutes = ['/dashboard'];

// Define the paths that should be restricted for authenticated users
const restrictedRoutes = ['/auth/sign-in', '/auth/register'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthenticated = !!token;
  const { pathname } = req.nextUrl;

  // Redirect to sign-in if the user is not authenticated and trying to access protected routes
  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }

  // Redirect to the homepage if the user is authenticated and trying to access restricted routes
  if (isAuthenticated && restrictedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Allow the request to proceed if no conditions are met
  return NextResponse.next();
}

// Specify the paths to run the middleware
export const config = {
  matcher: ['/dashboard', '/auth/sign-in', '/auth/register'],
};
