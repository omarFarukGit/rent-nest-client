"use client"

import { createProperty } from "@/app/(dashboardGroup)/_actions/landloard/propertiesActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
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

type Category = {
  id: string
  name: string
}

type Props = {
  categories: Category[]
}

export default function AddPropertyForm({ categories }: Props) {
  const router = useRouter()

  const [state, action, pending] = useActionState(createProperty, initialState)

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success(state.message)

      router.replace("/landlord-dashboard/properties")
    } else {
      toast.error(state.message)
    }
  }, [state, router])

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Add New Property</h1>

        <p className="mt-2 text-muted-foreground">
          Fill in the property details to publish a new rental listing.
        </p>
      </div>

      <form action={action} className="space-y-6">
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
                name="categoryId"
                className="h-10 w-full rounded-md border px-3"
                required
              >
                <option value="">Select Category</option>

                {categories.slice(1).map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
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

              <Input name="location" placeholder="Banani, Dhaka" />
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

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenitiesList.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" name="amenities" value={item} />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Images */}

        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Property Images</h2>

          <Input name="images" type="file" multiple accept="image/*" />
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={pending}>
            {pending ? "Publishing..." : "Publish Property"}
          </Button>
        </div>
      </form>
    </div>
  )
}
