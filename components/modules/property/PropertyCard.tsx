"use client"

import Image from "next/image"
import Link from "next/link"

import { Bath, BedDouble, Heart, MapPin, Ruler, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

type Property = {
  id: string
  title: string
  description: string
  images: string[]
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  size: string
  amenities: string[]
  availability: string

  category: {
    id: string
    name: string
  }

  averageRating: number
  reviewCount: number
}

type Props = {
  property: Property
}

export default function PropertyCard({ property }: Props) {
  const currency = process.env.NEXT_PUBLIC_CURRENCY
  const [wishlist, setWishlist] = useState(false)

  return (
    <div className="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={property.images[0] || "/placeholder-house.jpg"}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Property Type */}

        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary">
          {property.category.name}
        </span>

        {/* Availability */}

        {property.availability && (
          <span
            className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium ${
              property.availability === "AVAILABLE"
                ? "bg-green-100 text-green-700"
                : property.availability === "RENTED"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
            } `}
          >
            {property.availability}
          </span>
        )}

        {/* Wishlist */}

        <Button
          size="icon"
          variant="secondary"
          onClick={() => setWishlist(!wishlist)}
          className="absolute right-3 bottom-3 rounded-full"
        >
          <Heart
            className={`h-5 w-5 ${
              wishlist ? "fill-red-500 text-red-500" : ""
            } `}
          />
        </Button>
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">
        {/* Price + Type */}

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-primary">
            {currency} {property.price.toLocaleString()}
          </h3>

          <span className="text-sm text-muted-foreground">/month</span>
        </div>

        {/* Title */}

        <h2 className="line-clamp-1 text-xl font-semibold">{property.title}</h2>

        {/* Location */}

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />

          {property.location}
        </div>

        {/* Property Info */}

        <div className="flex gap-6 border-y py-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            {property.bedrooms}
            Beds
          </div>

          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            {property.bathrooms}
            Baths
          </div>
        </div>

        {/* Button */}

        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}
