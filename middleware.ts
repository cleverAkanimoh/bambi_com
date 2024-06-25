// middleware.ts
import { NextResponse, NextRequest } from 'next/server';
import { getAuth } from 'firebase/auth';
import { initFirebase } from '@/config/firebase-config'; // Ensure correct path to firebase-config

// Initialize Firebase
initFirebase(); // Assuming this initializes Firebase correctly

export function middleware(request: NextRequest) {
  const auth = getAuth();
  const { currentUser } = auth;
  const url = request.nextUrl.clone();

  // Redirect to dashboard if the user is logged in and trying to access login or register pages
  if (currentUser && (url.pathname === '/auth/login' || url.pathname === '/auth/register')) {
    return NextResponse.redirect('/dashboard');
  }

  // Redirect to login if the user is not logged in and trying to access the dashboard
  if (!currentUser && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect('/auth/login');
  }

  // Allow the request to proceed if none of the above conditions are met
  return NextResponse.next();
}
