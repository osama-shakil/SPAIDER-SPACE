
import { NextResponse } from "next/server";
export function middleware(request) {
    const token = request.cookies.get("uid");
    console.log('token: ', token);
   
    if (token?.value && request.nextUrl.pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/chatbot", request.url));
    }
    if (!token?.value && (request.nextUrl.pathname.startsWith("/chatbot"))) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
   
    // Proceed normally if none of the above conditions are met
    return NextResponse.next();
}
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}