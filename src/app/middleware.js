import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore API routes, static files, and already-lowercase paths
  const isApi = pathname.startsWith('/api');
  const isStatic = pathname.includes('.');
  const isLowercase = pathname === pathname.toLowerCase();

  if (isApi || isStatic || isLowercase) {
    return NextResponse.next();
  }

  // Redirect to lowercase path
  const url = request.nextUrl.clone();
  url.pathname = pathname.toLowerCase();

  return NextResponse.redirect(url);
}
