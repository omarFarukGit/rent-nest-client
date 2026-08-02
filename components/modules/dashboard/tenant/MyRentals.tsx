"use client"

import { Calendar, Home, MapPin, User, CreditCard, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TRentalRequestsResponse } from "@/types/RentType"


type Props = {
  rentals: TRentalRequestsResponse
}

export default function MyRentals({ rentals }: Props) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">My Rentals</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your current and previous rental properties.
        </p>
      </div>

      {/* Summary */}
      {/* <div className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Active Rentals</p>

          <h2 className="mt-2 text-3xl font-bold">2</h2>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Monthly Rent</p>

          <h2 className="mt-2 text-3xl font-bold">$1300</h2>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Next Payment</p>

          <h2 className="mt-2 text-3xl font-bold">01 Aug</h2>
        </div>
      </div> */}

      {/* Rentals */}
  {/* Rentals */}
<div className="space-y-6">
  {rentals.data.length > 0 ? (
    rentals.data.map((rental) => (
      <div key={rental.id} className="rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />

              <h2 className="text-xl font-semibold">
                {rental.property.title}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {rental.property.location}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-primary" />
              Landlord:
              <span className="font-medium">
                {rental.landlord.name}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary" />
              Start:
              <span className="font-medium">
                {new Date(rental.startDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <CreditCard className="h-4 w-4 text-primary" />
              Next Payment:
              <span className="font-medium">
                {new Date(rental.endDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div>
              <p className="text-sm text-muted-foreground">
                Monthly Rent
              </p>

              <h3 className="text-2xl font-bold">
                {rental.property.price}
              </h3>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-medium text-green-700">
              {rental.status}
            </span>

            <div className="flex gap-3">
              <Button variant="outline">
                <Eye className="mr-2 h-4 w-4" />
                Details
              </Button>

              <Button>
                Pay Rent
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="rounded-xl border bg-card py-16">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Home className="h-12 w-12 text-muted-foreground" />

        <h3 className="text-xl font-semibold">
          No rentals found
        </h3>

        <p className="max-w-sm text-sm text-muted-foreground">
          You don&apos;t have any rental requests or active rentals yet.
        </p>
      </div>
    </div>
  )}
</div>
    </div>
  )
}
