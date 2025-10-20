import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthed = request.cookies.get('lc_auth')?.value === 'ok';
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');
  if (isDashboard && !isAuthed) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};


