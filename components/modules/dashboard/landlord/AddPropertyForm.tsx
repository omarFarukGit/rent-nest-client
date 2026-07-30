"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AddPropertyForm() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Add New Property
        </h1>

        <p className="mt-2 text-muted-foreground">
          Fill in the property details to publish a new rental listing.
        </p>
      </div>

      <form className="space-y-6">
        <div className="rounded-xl border bg-card p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Property Title
              </label>

              <Input placeholder="Modern Family Apartment" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select className="h-10 w-full rounded-md border bg-background px-3">
                <option>Apartment</option>
                <option>House</option>
                <option>Villa</option>
                <option>Office</option>
                <option>Land</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Property Type
              </label>

              <select className="h-10 w-full rounded-md border bg-background px-3">
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Monthly Rent
              </label>

              <Input type="number" placeholder="25000" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Bedrooms
              </label>

              <Input type="number" placeholder="3" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Bathrooms
              </label>

              <Input type="number" placeholder="2" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Area (sqft)
              </label>

              <Input type="number" placeholder="1500" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Availability
              </label>

              <select className="h-10 w-full rounded-md border bg-background px-3">
                <option>Available</option>
                <option>Unavailable</option>
              </select>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Property Address
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Input placeholder="District" />

            <Input placeholder="City" />

            <Input placeholder="Area" />

            <Input placeholder="Postal Code" />
          </div>
        </div>

        {/* Description */}
        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Description
          </h2>

          <Textarea
            rows={6}
            placeholder="Write detailed property information..."
          />
        </div>

        {/* Amenities */}
        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Amenities
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "WiFi",
              "Parking",
              "Lift",
              "Generator",
              "Security",
              "Gas",
              "Air Conditioning",
              "Balcony",
              "Gym",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2"
              >
                <input type="checkbox" />

                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Property Images
          </h2>

          <Input type="file" multiple />
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button size="lg">
            Publish Property
          </Button>
        </div>
      </form>
    </div>
  );
}