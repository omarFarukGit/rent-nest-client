"use server"

import { cookies } from "next/headers"

export const getLandlordDashboard = async () => {
  const cookieStore = await cookies()

  const accessToken = cookieStore.get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/dashboard/landlord/stats`,
    {
      headers: {
        "Content-type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    }
  )
  const result = await res.json()

  return result
}
