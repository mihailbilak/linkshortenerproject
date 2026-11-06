# Authentication (Clerk)

All authentication in this app is handled by Clerk (`@clerk/nextjs`). **No other auth method may be used** (no NextAuth, custom sessions, JWTs, password handling, or other providers).

## Route protection

- `/dashboard` (and any sub-route) is protected. Unauthenticated users must not be able to access it.
- A signed-in user who visits the homepage (`/`) must be redirected to `/dashboard`.
- Enforce both rules in `proxy.ts` (not `middleware.ts`) using `clerkMiddleware` and `createRouteMatcher`:

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  if (userId && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
});
```

## Sign in / sign up

- Sign in and sign up must **always open as a modal**. Use `<SignInButton mode="modal" />` and `<SignUpButton mode="modal" />`.
- Do not link users to `/sign-in` or `/sign-up` as the primary flow, and do not use `redirectToSignIn` redirects for page-based flows when a modal can be used.
- Use Clerk components (`Show`, `UserButton`, `SignInButton`, `SignUpButton`) for auth UI. Do not build custom sign-in forms.

## Getting the user

- Server code: `const { userId } = await auth();` from `@clerk/nextjs/server`. Reject the request if `userId` is null.
- Always get `userId` from Clerk on the server. Never accept it as a client-supplied parameter.
- All data access on user-owned data must be scoped to this `userId`.
