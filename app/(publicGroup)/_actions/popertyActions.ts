"use server"

import { cookies } from "next/headers"

export const getAllProperties = async (query?: {
  search?: string
  category?: string
  minPrice?: string
  maxPrice?: string
  page?: string
}) => {
  const cookieStore = await cookies()

  const token = cookieStore.get("accessToken")?.value

  const params = new URLSearchParams()

  Object.entries(query || {}).forEach(([key, value]) => {
    if (value) {
      params.append(key, value)
    }
  })

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/properties?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch properties")
  }

  return res.json()
}

export async function getProperty(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`,
    {
      cache: "no-store",
    }
  )

  return res.json()
}
