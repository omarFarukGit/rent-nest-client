"use server"

import { cookies } from "next/headers"

export const getRentalRequestLandload = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals/landlord`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
  })
  const result = await res.json()

  return result
}


