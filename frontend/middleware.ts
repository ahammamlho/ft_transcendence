export { default } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/api/auth/signin', request.url));
// }

export const config = { matcher: ['/chatPage'] };
