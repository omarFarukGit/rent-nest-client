import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtUtils } from "./lib/jwt"
import { JwtPayload } from "jsonwebtoken"
import { getNewAccessToken } from "./services/refreshToken"

const AUTH_ROUTES = ["/login", "/register"]
const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/properties",
  "/about",
  "/contact",
]
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const cookieStore = await cookies()
  const pathName = request.nextUrl.pathname
  let accessToken = request.cookies.get("accessToken")?.value as string
  const refreshToken = request.cookies.get("refreshToken")?.value as string

  let decodedAccessToken = accessToken
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

    // return NextResponse.redirect(new URL("/login", request.url))
  }
  if (decodedAccessToken?.success) {
    userRole = decodedAccessToken.data.role
  }
  const isPublic = PUBLIC_ROUTES.some(
    (route) => pathName === route || pathName.startsWith(route + "/")
  )

  // authenticated pagess protections
  if (!accessToken && !isPublic) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirectTo", pathName)
    return NextResponse.redirect(loginUrl)
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

  // get new accessToken to refreshToken and set cookie new accessToken;
  if (!decodedAccessToken?.success && decodeRefreshToken?.success) {
    const result = await getNewAccessToken()

    if (result.success) {
      const newAccessToken = result.data.accessToken
      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        maxAge: 60 * 60 * 24,
      })

      accessToken = newAccessToken
      decodedAccessToken = accessToken
        ? jwtUtils.verifyToken(
            accessToken,
            process.env.JWT_ACCESS_SECRET as string
          )
        : null
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)",
  ],
}
