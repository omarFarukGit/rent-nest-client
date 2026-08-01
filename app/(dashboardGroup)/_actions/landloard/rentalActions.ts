"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const getRentalRequestLandload = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals/landlord`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: 'force-cache',
    next:{
      revalidate:60*60*24,
      tags:['rental-requests']
    }
  })
  const result = await res.json()

  return result
}

export const updateRentalRequestLandload = async (
  id: string,
  status: "APPROVED" | "REJECTED"
) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const payload = {
    status: status,
  }
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/rentals/${id}/status`,
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
 if(result.success){
  revalidateTag('rental-requests',{expire:0})
 }
  return result
}


export const myTenants = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/rentals/landlord?status=APPROVED&paymentStatus=PAID`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: 'force-cache',
    next:{
      revalidate:60*60*24,
      tags:['rental-requests']
    }
  })
  const result = await res.json()

  return result
}
