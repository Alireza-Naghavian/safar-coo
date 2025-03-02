import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/user-panel",
  "/user-panel/blog-analytics",
  "/user-panel/my-bookmarks",
  "/user-panel/notifications",
  "/user-panel/tickets",
  "/user-panel/travel-exprience",
  "/user-panel/user-profile",
];

export const middleware = async (req: NextRequest) => {
  const accessToken = req.cookies.get("accessToken")?.value ?? "";
  const refreshToken = req.cookies.get("refreshToken")?.value ?? "";

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/clientAuthMiddleware`, {
    headers:{
      "accessToken":accessToken,
      "refreshToken":refreshToken
    },
    credentials:"include"
  });
  const data = await res.json();
  // redirect when not login
  if (
    data.status === 401 &&
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
  ) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
};
export const config = {
  matcher: ["/user-panel/:path*"],
};
