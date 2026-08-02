"use server"

import { cookies } from "next/headers"

export const getAdminDashboardStats = async () => {
    
  const cookieStore = await cookies()

  const accessToken = cookieStore.get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/dashboard/admin/stats`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch admin stats")
  }

  const data = await res.json()

  return data
}
