import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="relative container mx-auto overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-house.png"
          alt="Beautiful house"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="text-4xl leading-tight font-bold md:text-6xl">
            Find Your Perfect Home
            <span className="block text-primary">With Rent Nest</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            Discover thousands of rental properties, connect with trusted
            landlords, and find a place that feels like home.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 rounded-xl bg-background/90 p-4 backdrop-blur md:flex-row">
            {/* Location */}
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />

              <Input
                placeholder="Enter location"
                className="border-0 bg-transparent text-foreground shadow-none focus-visible:ring-0"
              />
            </div>

            {/* Property Type */}
            <div className="flex flex-1 items-center gap-2">
              <Home className="h-5 w-5 text-primary" />

              <Input
                placeholder="Property type"
                className="border-0 bg-transparent text-foreground shadow-none focus-visible:ring-0"
              />
            </div>

            <Button size="lg">
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/properties">Explore Properties</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-black"
              asChild
            >
              <Link href="/register">Become a Landlord</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
