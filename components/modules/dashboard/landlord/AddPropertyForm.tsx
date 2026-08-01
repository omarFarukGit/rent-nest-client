"use client"

import { createProperty } from "@/app/(dashboardGroup)/_actions/landloard/propertiesActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useActionState, useEffect, useState } from "react"
import { toast } from "sonner"
import Image from "next/image"
import { uploadImageToImgBB } from "@/utils/uploadImage"
import { useRouter } from "next/navigation"

const amenitiesList = [
  "WiFi",
  "Parking",
  "Lift",
  "Generator",
  "Security",
  "Gas",
  "Air Conditioning",
  "Balcony",
  "Gym",
]

const initialState = {
  success: false,
  message: "",
}

export default function AddPropertyForm() {
  const [state, action, pending] = useActionState(createProperty, initialState)

  const [images, setImages] = useState<File[]>([])
  const [preview, setPreview] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success(state.message)
      router.push("/landlord-dashboard/properties")
    } else {
      toast.error(state.message)
    }
  }, [state])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    setImages(files)

    const urls = files.map((file) => URL.createObjectURL(file))

    setPreview(urls)
  }

  const handleSubmit = async (formData: FormData) => {
    try {
      // Upload images to ImgBB

      const imageUrls = await Promise.all(
        images.map((file) => uploadImageToImgBB(file))
      )

      // remove File objects

      formData.delete("images")

      // Add image URLs

      imageUrls.forEach((url) => {
        formData.append("images", url)
      })

      // Call Server Action

      await action(formData)
    } catch (error) {
      toast.error("Image upload failed")
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Add New Property</h1>

        <p className="mt-2 text-muted-foreground">
          Fill in the property details to publish a new rental listing.
        </p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {/* Basic Information */}

        <div className="rounded-xl border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label>Property Title</label>

              <Input name="title" placeholder="Modern Apartment" required />
            </div>

            <div>
              <label>Category</label>

              <select
                name="categoryName"
                className="h-10 w-full rounded-md border px-3"
              >
                <option value="Apartment">Apartment</option>

                <option value="House">House</option>

                <option value="Villa">Villa</option>

                <option value="Office">Office</option>
              </select>
            </div>

            <div>
              <label>Monthly Rent</label>

              <Input name="price" type="number" placeholder="25000" />
            </div>

            <div>
              <label>Bedrooms</label>

              <Input name="bedrooms" type="number" />
            </div>

            <div>
              <label>Bathrooms</label>

              <Input name="bathrooms" type="number" />
            </div>

            <div>
              <label>Size</label>

              <Input name="size" type="number" />
            </div>

            <div>
              <label>Availability</label>

              <select
                name="availability"
                className="h-10 w-full rounded-md border px-3"
              >
                <option value="AVAILABLE">Available</option>

                <option value="RENTED">Rented</option>

                <option value="UNAVAILABLE">Unavailable</option>
              </select>
            </div>

            <div>
              <label>Location</label>

              <Input name="location" placeholder="Banani Dhaka" />
            </div>
          </div>
        </div>

        {/* Description */}

        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Description</h2>

          <Textarea
            name="description"
            rows={6}
            placeholder="Property details..."
          />
        </div>

        {/* Amenities */}

        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Amenities</h2>

          <div className="grid grid-cols-3 gap-4">
            {amenitiesList.map((item) => (
              <label key={item} className="flex gap-2">
                <input type="checkbox" name="amenities" value={item} />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Images */}

        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Property Images</h2>

          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />

          <div className="mt-4 flex flex-wrap gap-4">
            {preview.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={120}
                height={120}
                alt="preview"
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        <Button type="submit" disabled={pending}>
          {pending ? "Publishing..." : "Publish Property"}
        </Button>
      </form>
    </div>
  )
}
