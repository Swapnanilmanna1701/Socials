import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/api/uploadthing","/api/webhook/clerk"],
  ignoredRoutes: ["/api/uploadthing","/api/webhook/clerk"],

});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};