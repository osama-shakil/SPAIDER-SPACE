
import { NextResponse } from "next/server";
export function middleware(request) {
    const token = request.cookies.get("uid");
   
    if (token && (request.nextUrl.pathname.startsWith("/auth/login"))) {
        return NextResponse.redirect(new URL("/", request.url));
    }
   
    // Proceed normally if none of the above conditions are met
    return NextResponse.next();
}
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}