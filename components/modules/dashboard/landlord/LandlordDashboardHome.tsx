"use client"

import Link from "next/link"
import {
  Building2,
  Home,
  Users,
  DollarSign,
  ArrowRight,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const stats = [
  {
    title: "Total Properties",
    value: "12",
    icon: Building2,
    color: "text-blue-600",
  },
  {
    title: "Available",
    value: "5",
    icon: Home,
    color: "text-green-600",
  },
  {
    title: "Active Tenants",
    value: "7",
    icon: Users,
    color: "text-orange-600",
  },
  {
    title: "Monthly Revenue",
    value: "$3,250",
    icon: DollarSign,
    color: "text-emerald-600",
  },
]

const requests = [
  {
    tenant: "Ahmed Rahman",
    property: "Modern Apartment",
    status: "Pending",
  },
  {
    tenant: "Sarah Khan",
    property: "Luxury Villa",
    status: "Approved",
  },
  {
    tenant: "Hasan Ali",
    property: "Office Space",
    status: "Pending",
  },
]

export default function LandlordDashboardHome() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">Landlord Dashboard</h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Heres an overview of your rental business.
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
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Requests */}
        <div className="rounded-xl border bg-card p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Rental Requests</h2>

            <Button variant="ghost" asChild>
              <Link href="/landlord-dashboard/rental-requests">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {requests.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-medium">{request.tenant}</h3>

                  <p className="text-sm text-muted-foreground">
                    {request.property}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    request.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border bg-card p-6">
          <h2 className="text-xl font-semibold">Quick Actions</h2>

          <div className="mt-5 space-y-3">
            <Button className="w-full" asChild>
              <Link href="/landlord-dashboard/properties/create">
                Add Property
              </Link>
            </Button>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/landlord-dashboard/properties">
                Manage Properties
              </Link>
            </Button>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/landlord-dashboard/rental-requests">
                Rental Requests
              </Link>
            </Button>
          </div>

          <div className="mt-8 rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />

              <p className="font-medium">Tips</p>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Keep your property information updated to attract more tenants.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
