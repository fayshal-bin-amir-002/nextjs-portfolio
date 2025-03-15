import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./service/auth";

const authRoutes = ["/login"];

const roleBasedPrivateRoutes = {
  admin: [/^\/dashboard(\/|$)/],
};

type Role = keyof typeof roleBasedPrivateRoutes;

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const userInfo = await getCurrentUser();
  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    if (
      routes.some((route) => pathname.match(route)) &&
      userInfo?.email === "foyshalbinamir@gmail.com"
    ) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/`, request.url));
    }
  }
};

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard/:path*"],
};
