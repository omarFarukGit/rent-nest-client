"use server"

import { cookies } from "next/headers"

export const getAllCategory = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
    method: "GET",
    headers: {
      ContentType: "appliction/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["categories"],
    },
  })
  const result = await res.json()

  return result
}
export const createCategory = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {}
  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
    method: "POST",
    headers: {
      ContentType: "appliction/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
  const result = await res.json()

  return result
}

export const updateCategory = async (id: string) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {}
  const res = await fetch(`${process.env.BACKEND_URL}/api/categories/${id}`, {
    method: "PATCH",
    headers: {
      ContentType: "appliction/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
  const result = await res.json()

  return result
}

export const deleteCategory = async (id: string) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {}
  const res = await fetch(`${process.env.BACKEND_URL}/api/categories/${id}`, {
    method: "DELETE",
    headers: {
      ContentType: "appliction/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
  const result = await res.json()

  return result
}
