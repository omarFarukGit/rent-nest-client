import Link from "next/link"

import { Home, FileText, CreditCard, Search, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {
  data: {
    rentalRequests: number
    activeRentals: number
    totalPayments: number
  }
}

export default function TenantDashboardHome({ data }: Props) {
  const currency = process.env.NEXT_PUBLIC_CURRENCY
  const stats = [
    {
      title: "Rental Requests",
      value: data.rentalRequests,
      icon: FileText,
    },
    {
      title: "Active Rentals",
      value: data.activeRentals,
      icon: Home,
    },
    {
      title: "Total Payments",
      value: `${currency}${data.totalPayments}`,
      icon: CreditCard,
    },
  ]

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
      <div className="grid gap-6 sm:grid-cols-3 xl:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-card p-6 transition hover:shadow-md"
            >
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

          <div className="rounded-lg border p-5 text-center text-sm text-muted-foreground">
            No recent rental requests
          </div>
        </div>

        {/* Quick Actions */}

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
              <Link href="/dashboard/payments">
                <CreditCard className="mr-2 h-4 w-4" />
                Payment History
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
            <Link href="/properties">View More</Link>
          </Button>
        </div>

        <div className="rounded-xl border bg-card p-6 text-center text-sm text-muted-foreground">
          Explore properties and find your next home 🏠
        </div>
      </div>
    </div>
  )
}
