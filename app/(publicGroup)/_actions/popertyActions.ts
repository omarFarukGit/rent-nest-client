"use server"

export const getAllProperties = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/properties`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["properties"],
    },
  })

  const result = await res.json()

  return result
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