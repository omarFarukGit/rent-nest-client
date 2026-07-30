"use client"

import Link from "next/link"
import {
  Heart,
  Home,
  FileText,
  CreditCard,
  Search,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const stats = [
  {
    title: "Rental Requests",
    value: "8",
    icon: FileText,
  },
  {
    title: "Active Rentals",
    value: "2",
    icon: Home,
  },
  {
    title: "Wishlist",
    value: "15",
    icon: Heart,
  },
  {
    title: "Total Payments",
    value: "$2,500",
    icon: CreditCard,
  },
]

const rentalRequests = [
  {
    property: "Modern Family Apartment",
    location: "Dhanmondi, Dhaka",
    status: "PENDING",
  },
  {
    property: "Luxury Villa",
    location: "Uttara, Dhaka",
    status: "APPROVED",
  },
  {
    property: "Office Space",
    location: "Gulshan, Dhaka",
    status: "REJECTED",
  },
]

const properties = [
  {
    title: "Beautiful Apartment",
    location: "Mirpur, Dhaka",
    rent: "$350/month",
  },
  {
    title: "Family House",
    location: "Banani, Dhaka",
    rent: "$600/month",
  },
  {
    title: "Small Studio",
    location: "Bashundhara",
    rent: "$250/month",
  },
]

export default function TenantDashboardHome() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold">Welcome Back, Tenant 👋</h1>

        <p className="mt-2 text-muted-foreground">
          Find your perfect home and manage your rentals easily.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.title} className="rounded-xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>

                  <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
                </div>

                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Rental Requests */}
        <div className="rounded-xl border bg-card p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Rental Requests</h2>

            <Button variant="ghost" asChild>
              <Link href="/dashboard/rental-requests">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {rentalRequests.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-medium">{item.property}</h3>

                  <p className="text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    item.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : item.status === "REJECTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  } `}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action */}
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Quick Actions</h2>

          <div className="mt-5 space-y-3">
            <Button className="w-full" asChild>
              <Link href="/dashboard/properties">
                <Search className="mr-2 h-4 w-4" />
                Browse Properties
              </Link>
            </Button>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/dashboard/wishlist">
                <Heart className="mr-2 h-4 w-4" />
                My Wishlist
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Recommended Properties */}
      <div>
        <div className="mb-5 flex justify-between">
          <h2 className="text-xl font-semibold">Recommended Properties</h2>

          <Button variant="ghost" asChild>
            <Link href="/dashboard/properties">View More</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((property, index) => (
            <div key={index} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold">{property.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {property.location}
              </p>

              <p className="mt-3 font-medium">{property.rent}</p>

              <Button className="mt-4 w-full" variant="outline">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
