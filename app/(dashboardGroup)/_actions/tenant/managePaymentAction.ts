"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const createPayment = async (payload: {
  rentalRequestId: string
  amount: number
  provider: "STRIPE"
}) => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value

  const res = await fetch(`${process.env.BACKEND_URL}/api/payments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
    body: JSON.stringify(payload),
  })

  const result = await res.json()

  if (result.success) {
    redirect(result.data.checkoutUrl)
  }
  return result
}

export const getMyPayments = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(`${process.env.BACKEND_URL}/api/payments`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-cache",
  })

  const result = await res.json()
  console.log(result)

  return result
}
