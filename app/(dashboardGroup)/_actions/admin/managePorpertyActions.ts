"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const getByAdminAllPorperties = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/admin/properties`, {
    method: "GET",
    headers: {
      "Content-Type": "application/josn",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["adminProperties"],
    },
  })

  const result = await res.json()
  return result
}

export const deleteProperty = async (id: string) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/admin/properties/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/josn",
        Cookie: `accessToken=${accessToken}`,
      },
    }
  )

  const result = await res.json()
  if (result.success) {
    revalidateTag("adminProperties", { expire: 0 })
  }
  return result
}
