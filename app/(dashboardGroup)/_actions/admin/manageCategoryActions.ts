"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const getAllCategory = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["categories"],
    },
  })
  const result = await res.json()

  return result
}
export const createCategory = async (formData: FormData) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {
    name: formData.get("name"),
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
  const result = await res.json()
  if (result.success) {
    revalidateTag("categories", { expire: 0 })
  }
  return result
}

export const updateCategory = async (id: string, formData: FormData) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {
    name: formData.get("name"),
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
  const result = await res.json()
  if (result.success) {
    revalidateTag("categories", { expire: 0 })
  }
  return result
}

export const deleteCategory = async (id: string) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {}
  const res = await fetch(`${process.env.BACKEND_URL}/api/categories/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })
  const result = await res.json()
  if (result.success) {
    revalidateTag("categories", { expire: 0 })
  }
  return result
}
