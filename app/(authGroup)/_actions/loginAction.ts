/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { cookies } from "next/headers"
import jwt, { JwtPayload } from "jsonwebtoken"
import { redirect } from "next/navigation"

export const loginAction = async (
  redirectTo: string,
  preveState: any,
  fromData: FormData
) => {
  const cookieStore = await cookies()
  const payload = {
    email: fromData.get("email"),
    password: fromData.get("password"),
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-cache",
  })

  const result = await res.json()

  if (result.success) {
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24,
    })
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24 * 7,
    })
  }

  // optinal redirect
  if (result.success) {
    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo)
    }
    //default ridect to login user role base dashboard
    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload
    if (decodedToken.role === "TENANT") {
      redirect("/dashboard")
    } else if (decodedToken.role === "LANDLORD") {
      redirect("/landloard-dashboard")
    } else if (decodedToken.role === "ADMIN") {
      redirect("/admin-dashboard")
    }
  }

  return result
}
