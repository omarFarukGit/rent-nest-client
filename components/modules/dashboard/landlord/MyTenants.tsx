/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Search, Eye, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IRentalRequestResponse } from "@/types/RentalType"

type Props = {
  tenants: IRentalRequestResponse
}

export default function MyTenants({ tenants }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">My Tenants</h1>

        <p className="mt-2 text-muted-foreground">
          Manage tenants currently renting your properties.
        </p>
      </div>

      {/* Search */}

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search by tenant or property..."
            className="pl-10"
          />
        </div>

        <Button variant="outline" className="w-full sm:w-auto">
          Filter
        </Button>
      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-hidden rounded-xl border bg-card md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">Tenant</th>

                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Monthly Rent</th>

                <th className="p-4 text-left">Start Date</th>

                <th className="p-4 text-left">End Date</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tenants.data.map((item) => (
                <tr key={item.id} className="border-t hover:bg-muted/30">
                  <td className="p-4">
                    <TenantInfo item={item} />
                  </td>

                  <td className="p-4">{item.property.title}</td>

                  <td className="p-4 font-medium">
                    ৳ {item.property.price.toLocaleString()} / month
                  </td>

                  <td className="p-4">
                    {new Date(item.startDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {new Date(item.endDate).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <Status status={item.status} />
                  </td>

                  <td className="p-4">
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card */}

      <div className="grid gap-4 md:hidden">
        {tenants.data.map((item) => (
          <div
            key={item.id}
            className="space-y-4 rounded-xl border bg-card p-4"
          >
            <TenantInfo item={item} />

            <div className="flex justify-between text-sm">
              <span>Property</span>

              <span className="font-medium">{item.property.title}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Rent</span>

              <span className="font-medium">
                ৳ {item.property.price.toLocaleString()} / month
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Start</span>

              <span>{new Date(item.startDate).toLocaleDateString()}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>End</span>

              <span>{new Date(item.endDate).toLocaleDateString()}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Status</span>

              <Status status={item.status} />
            </div>

            <div className="flex justify-end">
              <Button variant="outline" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {tenants.data.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          No tenants found.
        </div>
      )}
    </div>
  )
}

function TenantInfo({ item }: any) {
  return (
    <div>
      <h3 className="font-medium">{item.tenant.name}</h3>

      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />

          {item.tenant.email}
        </div>

        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />

          {item.tenant.phone || "N/A"}
        </div>
      </div>
    </div>
  )
}

function Status({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        status === "APPROVED"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status === "APPROVED" ? "Ending Soon" : "Active"}
    </span>
  )
}
