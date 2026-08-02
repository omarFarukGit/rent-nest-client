/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAdminDashboardStats } from "@/app/(dashboardGroup)/_actions/admin/adminDashboardActions"
import {
  Users,
  Home,
  FileText,
  TrendingUp,
  Building2,
  UserCheck,
} from "lucide-react"
import Link from "next/link"

export default async function AdminDashboardHome() {
  const result = await getAdminDashboardStats()
  const currency = process.env.NEXT_PUBLIC_CURRENCY

  const data = result.data

  const stats = [
    {
      title: "Total Users",
      value: data.totalUsers,
      icon: Users,
      description: "Registered users",
    },
    {
      title: "Total Properties",
      value: data.totalProperties,
      icon: Home,
      description: "Listed properties",
    },
    {
      title: "Rental Requests",
      value: data.rentalRequests,
      icon: FileText,
      description: "Pending requests",
    },
    {
      title: "Active Landlords",
      value: data.activeLandlords,
      icon: UserCheck,
      description: "Verified landlords",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="mt-2 text-muted-foreground">
          Manage users, properties and rental activities.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Overview */}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Properties */}

        <div className="rounded-xl border bg-card p-6 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />

            <h3 className="text-xl font-semibold">Recent Properties</h3>
          </div>

          <div className="mt-5 space-y-4">
            {data.recentProperties.slice(0, 6).map((property: any) => (
              <div
                key={property.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h4 className="font-medium">{property.title}</h4>

                  <p className="text-sm text-muted-foreground">
                    {property.location}
                  </p>

                  <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                    <span>
                      {currency} {property.price}
                    </span>

                    <span>{property.category?.name}</span>

                    <span>By {property.user?.name}</span>
                  </div>
                </div>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {property.availability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}

        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-xl font-semibold">Quick Actions</h3>

          <div className="mt-5 space-y-3">
            <button className="w-full rounded-lg border p-3 text-left hover:bg-accent">
              <Link href={"/admin-dashboard/users"}>Manage Users</Link>
            </button>

            <button className="w-full rounded-lg border p-3 text-left hover:bg-accent">
              <Link href={"/admin-dashboard/properties"}>
                Manage Properties
              </Link>
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-lg bg-primary/10 p-4 text-primary">
            <TrendingUp className="h-5 w-5" />

            <p className="text-sm">Platform growth is increasing</p>
          </div>
        </div>
      </div>
    </div>
  )
}
