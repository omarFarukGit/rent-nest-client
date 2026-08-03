"use server"

export const getAllProperties = async (query?: {
  search?: string
  category?: string
  minPrice?: string
  maxPrice?: string
  page?: string
}) => {
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
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: {
        revalidate: 3600,
        tags: ["properties"],
      },
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
      cache: "force-cache",
    }
  )

  return res.json()
}
