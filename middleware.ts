import { clerkMiddleware } from '@clerk/nextjs/server';

console.log("✅ Clerk Middleware is running..."); // Debugging

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], 
};
