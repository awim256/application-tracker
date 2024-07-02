import {clerkMiddleware, ClerkMiddlewareAuth, createRouteMatcher} from "@clerk/nextjs/server";

export default clerkMiddleware((auth: ClerkMiddlewareAuth, request): void => {
    if(!isPublicRoute(request)) {
        auth().protect();
    }
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);
