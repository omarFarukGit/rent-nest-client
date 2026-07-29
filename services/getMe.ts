"use server"

import { cookies } from "next/headers"

export const getMe = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "appliction/json",
      //   Authorization: accessToken,
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["my-profile"],
    },
  })

  const result = await res.json()

  return result
}
