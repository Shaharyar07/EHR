import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.SECRET });

  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  // Check the role and redirect based on the role
  switch (token.role) {
    case "RECEPTIONIST":
      if (!request.nextUrl.pathname.startsWith("/profile")) {
        return NextResponse.redirect(new URL("/profile", request.url));
      }
      break;
    case "DOCTOR":
      if (
        !request.nextUrl.pathname.startsWith("/patients") &&
        !request.nextUrl.pathname.startsWith("/patientprofile") &&
        !request.nextUrl.pathname.startsWith("/complain") &&
        !request.nextUrl.pathname.startsWith("/report")
      ) {
        return NextResponse.redirect(new URL("/patients", request.url));
      }
      break;
    case "NURSE":
      // Add the paths that the nurse can access here
      if (!request.nextUrl.pathname.startsWith("/vitals")) {
        return NextResponse.redirect(new URL("/vitals", request.url));
      }
      break;
    case "PATHOLOGIST":
      // Add the paths that the pathologist can access here
      if (!request.nextUrl.pathname.startsWith("/image")) {
        return NextResponse.redirect(new URL("/image", request.url));
      }
      break;
    default:
      return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    // Match all routes except the ones that start with /login and api
    // and the static folder
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};
