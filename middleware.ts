// export const middleware = () => {};

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher

  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};

// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuth } from 'firebase/auth';
import { initFirebase } from '@/config/firebase-config';

// Initialize Firebase
initFirebase();

export function middleware(request: NextRequest) {
  const auth = getAuth();
  const { currentUser } = auth;

  const url = request.nextUrl.clone();

  // Redirect to dashboard if the user is logged in and trying to access login or register pages
  if (currentUser && (url.pathname === '/auth/login' || url.pathname === '/auth/register')) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // Redirect to login if the user is not logged in and trying to access the dashboard
  if (!currentUser && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  // Allow the request to proceed if none of the above conditions are met
  return NextResponse.next();
}
