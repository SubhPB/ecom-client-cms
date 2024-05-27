// Byimaan

import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {

    const previousUrl = req.headers.get('referer') || '/';
    const response = NextResponse.next();
    response.cookies.set('previousUrl', previousUrl);
    return response
};

export const config = {
    matcher: '/:path*'
};