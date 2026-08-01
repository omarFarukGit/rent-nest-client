

export const getAllCategory = async () => {

  const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
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