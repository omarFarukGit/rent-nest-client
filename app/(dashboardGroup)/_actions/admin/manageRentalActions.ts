"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const getRentalRequests = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/admin/rentals`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["rentals"],
    },
  })

  const result = await res.json()
  return result
}

export const updateRentalRequest = async (
  id: string,
  status: "APPROVED" | "REJECTED"
) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {
    status: status,
  }
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/admin/rentals/${id}/status`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(payload),
    }
  )

  const result = await res.json()

  if (result.success) {
    revalidateTag("rentals", { expire: 0 })
  }

  return result
}

export const deleteRentalRequest = async (id: string) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/admin/rentals/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
    }
  )

  const result = await res.json()

  if (result.success) {
    revalidateTag("rentals", { expire: 0 })
  }

  return result
}
