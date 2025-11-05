import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const requestHeaders = new Headers(request.headers);
  
  // Add pathname and full URL to custom headers
  requestHeaders.set('x-pathname', url.pathname);
  requestHeaders.set('x-full-url', request.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
