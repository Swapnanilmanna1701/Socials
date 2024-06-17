import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
   
  publicRoutes: ["/api/webhook/clerk"],
  ignoredRoutes: ["/api/webhook/clerk"],
  });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};