import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtUtils } from "./lib/jwt"
import { JwtPayload } from "jsonwebtoken"
import { redirect } from "next/navigation"

const AUTH_ROUTES = ["/login", "/register"]
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const cookieStore = await cookies()
  const pathName = request.nextUrl.pathname
  const accessToken = cookieStore.get("accessToken")?.value as string
  const refreshToken = cookieStore.get("refreshToken")?.value as string

  const decodedAccessToken = accessToken
    ? ((await jwtUtils.verifyToken(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string
      )) as JwtPayload)
    : null

  const decodeRefreshToken = refreshToken
    ? ((await jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string
      )) as JwtPayload)
    : null

  let userRole = null

  if (!decodedAccessToken?.success) {
    cookieStore.delete("accessToken")
    cookieStore.delete("refreshToken")
    return NextResponse.redirect(new URL("/login", request.url))
  }
  if (decodedAccessToken?.success) {
    userRole = decodedAccessToken.data.role
  }

  // login user dont go login page and register page
  if (accessToken && AUTH_ROUTES.includes(pathName)) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // athorization
  if (pathName.startsWith("/dashboard") && userRole !== "TENANT") {
    return NextResponse.redirect(new URL("/", request.url))
  } else if (
    pathName.startsWith("/landloard-dashboard") &&
    userRole !== "LANDLORD"
  ) {
    return NextResponse.redirect(new URL("/", request.url))
  } else if (pathName.startsWith("/admin-dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
}
