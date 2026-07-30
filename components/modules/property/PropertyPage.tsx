"use client"

import { Search, SlidersHorizontal } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import PropertyCard from "./PropertyCard"

const properties = [
  {
    id: "9d6c5285-1df9-4291-9bce-3dd2a916fd0b",

    title: "Prime Residential Plot",

    description:
      "Prime residential plot with road access and utility connections.",

    images: ["https://example.com/images/land1.jpg"],

    price: "3500000",

    location: "Purbachal, Dhaka",

    bedrooms: 0,

    bathrooms: 0,

    size: "2160",

    amenities: ["Road Access", "Electricity", "Water Supply", "Gas Connection"],

    availability: "RENTED",

    category: {
      id: "1",
      name: "Lands",
    },

    averageRating: 5,

    reviewCount: 1,
  },
  {
    id: "9d6c5285-1df9-4291-9bce-3dd2a916fd0b",

    title: "Prime Residential Plot",

    description:
      "Prime residential plot with road access and utility connections.",

    images: ["https://example.com/images/land1.jpg"],

    price: "3500000",

    location: "Purbachal, Dhaka",

    bedrooms: 0,

    bathrooms: 0,

    size: "2160",

    amenities: ["Road Access", "Electricity", "Water Supply", "Gas Connection"],

    availability: "RENTED",

    category: {
      id: "1",
      name: "Lands",
    },

    averageRating: 5,

    reviewCount: 1,
  },
  {
    id: "9d6c5285-1df9-4291-9bce-3dd2a916fd0b",

    title: "Prime Residential Plot",

    description:
      "Prime residential plot with road access and utility connections.",

    images: ["https://example.com/images/land1.jpg"],

    price: "3500000",

    location: "Purbachal, Dhaka",

    bedrooms: 0,

    bathrooms: 0,

    size: "2160",

    amenities: ["Road Access", "Electricity", "Water Supply", "Gas Connection"],

    availability: "RENTED",

    category: {
      id: "1",
      name: "Lands",
    },

    averageRating: 5,

    reviewCount: 1,
  },

  {
    id: "2",

    title: "Modern Family Apartment",

    description: "Beautiful apartment with modern facilities.",

    images: ["https://example.com/images/home.jpg"],

    price: "45000",

    location: "Dhanmondi, Dhaka",

    bedrooms: 3,

    bathrooms: 2,

    size: "1500",

    amenities: ["Parking", "Lift", "Security"],

    availability: "AVAILABLE",

    category: {
      id: "2",
      name: "Apartment",
    },

    averageRating: 4.8,

    reviewCount: 20,
  },
]

export default function PropertyPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Explore Properties</h1>

        <p className="mt-2 text-muted-foreground">
          Find your perfect home from our available properties.
        </p>
      </div>

      {/* Search & Filter */}

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-5 w-5 text-muted-foreground" />

          <Input
            placeholder="Search by location or property name..."
            className="pl-10"
          />
        </div>

        <Button variant="outline">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      {/* Category */}

      <div className="flex flex-wrap gap-3">
        {["All", "Apartment", "House", "Villa", "Office", "Land"].map(
          (item) => (
            <Button
              key={item}
              variant={item === "All" ? "default" : "outline"}
              size="sm"
            >
              {item}
            </Button>
          )
        )}
      </div>

      {/* Property Count */}

      <div>
        <h2 className="text-xl font-semibold">
          Available Properties
          <span className="ml-2 text-muted-foreground">
            ({properties.length})
          </span>
        </h2>
      </div>

      {/* Grid */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Empty State */}

      {properties.length === 0 && (
        <div className="rounded-xl border p-10 text-center">
          <h3 className="text-xl font-semibold">No Property Found</h3>

          <p className="mt-2 text-muted-foreground">
            Try changing your search filters.
          </p>
        </div>
      )}
    </div>
  )
}
