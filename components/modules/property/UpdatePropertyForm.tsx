"use client"

import { updateProperty } from "@/app/(dashboardGroup)/_actions/landloard/propertiesActions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"

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

type Property = {
  id: string
  title: string
  description: string
  images: string[]
  price: number
  location: string
  categoryName: string
  bedrooms: number
  bathrooms: number
  size: number
  amenities: string[]
  availability: string
}

type Props = {
  property: Property
}

export default function UpdatePropertyForm({ property }: Props) {
  const router = useRouter()
  const [state, action, pending] = useActionState(
    updateProperty.bind(null, property.id),
    initialState
  )

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success(state.message)
      router.push("/landlord-dashboard/properties")
    } else {
      toast.error(state.message)
    }
  }, [state])

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Update Property</h1>

        <p className="mt-2 text-muted-foreground">
          Update your property information
        </p>
      </div>

      <form action={action} className="space-y-6">
        {/* Basic Information */}

        <div className="rounded-xl border p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label>Property Title</label>

              <Input name="title" defaultValue={property.title} required />
            </div>

            <div>
              <label>Category</label>

              <select
                name="categoryName"
                defaultValue={property.categoryName}
                className="h-10 w-full rounded-md border px-3"
              >
                <option value="Apartment">Apartment</option>

                <option value="House">House</option>

                <option value="Villa">Villa</option>

                <option value="Office">Office</option>

                <option value="Land">Land</option>
              </select>
            </div>

            <div>
              <label>Monthly Rent</label>

              <Input name="price" type="number" defaultValue={property.price} />
            </div>

            <div>
              <label>Bedrooms</label>

              <Input
                name="bedrooms"
                type="number"
                defaultValue={property.bedrooms}
              />
            </div>

            <div>
              <label>Bathrooms</label>

              <Input
                name="bathrooms"
                type="number"
                defaultValue={property.bathrooms}
              />
            </div>

            <div>
              <label>Size</label>

              <Input name="size" type="number" defaultValue={property.size} />
            </div>

            <div>
              <label>Availability</label>

              <select
                name="availability"
                defaultValue={property.availability}
                className="h-10 w-full rounded-md border px-3"
              >
                <option value="AVAILABLE">Available</option>

                <option value="RENTED">Rented</option>

                <option value="UNAVAILABLE">Unavailable</option>
              </select>
            </div>

            <div>
              <label>Location</label>

              <Input name="location" defaultValue={property.location} />
            </div>
          </div>
        </div>

        {/* Description */}

        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Description</h2>

          <Textarea
            name="description"

            rows={6}

            defaultValue={property.description}
          />
        </div>

        {/* Amenities */}

        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Amenities</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenitiesList.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"

                  name="amenities"

                  value={item}

                  defaultChecked={property.amenities.includes(item)}
                />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}

        <div className="flex justify-end">
          <Button type="submit" disabled={pending}>
            {pending ? "Updating..." : "Update Property"}
          </Button>
        </div>
      </form>
    </div>
  )
}
