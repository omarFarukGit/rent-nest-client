/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { uploadImageToImgBB } from "@/utils/uploadImage"
import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const getMyProperties = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const res = await fetch(
    `${process.env.BACKEND_URL}/api/properties/landlord`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ["my-properties"],
      },
    }
  )

  const result = await res.json()

  return result
}

export async function createProperty(prevState: any, formData: FormData) {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get("accessToken")?.value as string

  const files = formData.getAll("images") as File[]

  // Upload Images to ImgBB

  const imageUrls = await Promise.all(
    files
      .filter((file) => file.size > 0)
      .map((file) => uploadImageToImgBB(file))
  )

  const payload = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    location: formData.get("location"),
    categoryName: formData.get("categoryName"),
    bedrooms: Number(formData.get("bedrooms")),
    bathrooms: Number(formData.get("bathrooms")),
    size: Number(formData.get("size")),
    availability: formData.get("availability"),
    amenities: formData.getAll("amenities"),
    images: imageUrls,
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/properties`, {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  })

  const result = await res.json()

  if (result.success) {
    revalidateTag("properties", { expire: 0 })
    revalidateTag("my-properties", { expire: 0 })
  }
  return await result
}

type State = {
  success: boolean
  message: string
}

export async function updateProperty(
  propertyId: string,
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value

    const payload = {
      title: formData.get("title"),
      description: formData.get("description"),
      images: formData.getAll("images"),
      price: Number(formData.get("price")),
      location: formData.get("location"),
      categoryName: formData.get("categoryName"),
      bedrooms: Number(formData.get("bedrooms")),
      bathrooms: Number(formData.get("bathrooms")),
      size: Number(formData.get("size")),
      amenities: formData.getAll("amenities"),
      availability: formData.get("availability"),
    }

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/properties/${propertyId}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify(payload),
      }
    )

    const result = await res.json()

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Update failed",
      }
    }

    if (result.success) {
      revalidateTag("properties", { expire: 0 })
      revalidateTag("my-properties", { expire: 0 })
    }

    return {
      success: true,
      message: "Property updated successfully",
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
    }
  }
}
