// This is basic way
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

// This is NextJS way
import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account", "/account/profile", "/account/reservations"],
};
