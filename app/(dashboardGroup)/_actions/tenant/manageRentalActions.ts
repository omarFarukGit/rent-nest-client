/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { cookies } from "next/headers"

export const getRentalStats = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals/stats/all`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
  })
  const result = await res.json()

  return result
}

export const getMyRentalRequest = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/rentals/my-requests`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-cache",
    }
  )
  const result = await res.json()

  return result
}

export const cancelRentalRequest = async (id: string) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/rentals/${id}/cancel`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-cache",
    }
  )
  const result = await res.json()

  return result
}

export const createRentalRequest = async (
  prevSate: any,
  formData: FormData
) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {
    propertyId: formData.get("propertyId") as string,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    message: formData.get("message") as string,
  }



const res = await fetch(`${process.env.BACKEND_URL}/api/rentals`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Cookie: `accessToken=${accessToken}`,
  },
  body: JSON.stringify(payload),
})
  const result = await res.json()

  return result
}
