import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware() {},
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        if (pathname.startsWith('/admin')) {
          return token?.role === 'ADMIN';
        }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/admin/:path*'],
};

