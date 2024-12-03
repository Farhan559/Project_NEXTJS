import { NextResponse } from "next/server";
// import { config } from "process";
const isLoggedIn = false;
export function middleware(request){
    // if(!isLoggedIn && request.nextUrl.pathname != '/home'){
        return NextResponse.redirect(new URL('/home',request.url))
    // }
}
export const config = {
    matcher: ["/contact/:path"]
}