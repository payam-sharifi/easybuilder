import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

function isUnauthenticatedAppPath(pathname: string): boolean {
  return pathname === '/login' || pathname.startsWith('/login/');
}

function isDashboardPath(pathname: string): boolean {
  return pathname === '/dashboard' || pathname.startsWith('/dashboard/');
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = Boolean(request.cookies.get('agent_session'));

  if (isDashboardPath(pathname) || isUnauthenticatedAppPath(pathname)) {
    if (!hasSession && isDashboardPath(pathname)) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (hasSession && isUnauthenticatedAppPath(pathname)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
