"use server"

import { cookies } from "next/headers"

export const getTenantDashboardStats = async () => {
  const cookieStore = await cookies()

  const token = cookieStore.get("accessToken")?.value

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/dashboard/tenant-stats`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  )

  return res.json()
}
