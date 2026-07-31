"use server"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const getAllUsers = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/admin/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["users"],
    },
  })

  const result = await res.json()

  return result
}

export const updateUserStatus = async (
  id: string,
  status: "ACTIVE" | "BLOCKED"
) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {
    status: status,
  }
  const res = await fetch(`${process.env.BACKEND_URL}/api/admin/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()

  if (result.success) {
    revalidateTag("users", { expire: 0 })
  }

  return result
}
