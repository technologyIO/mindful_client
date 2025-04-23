import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl

  if (pathname === '/page/tmspage') {
    const url = request.nextUrl.clone()
    url.pathname = '/page/tms'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/page/tmspage'],
}
