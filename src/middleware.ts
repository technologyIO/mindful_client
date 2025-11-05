import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  
  // Get the actual host from headers (works with reverse proxies)
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  
  // Construct the full URL
  const fullUrl = `${protocol}://${host}${pathname}${search}`;
  
  // Add to custom header
  requestHeaders.set('x-full-url', fullUrl);
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
