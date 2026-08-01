"use client"

import Link from "next/link"
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TPropertiesResponse } from "@/types/PropertyType"

type Props = {
  properties: TPropertiesResponse
}

export default function LandlordMyProperties({ properties }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Properties</h1>

          <p className="mt-2 text-muted-foreground">
            Manage all your rental properties.
          </p>
        </div>

        <Button asChild>
          <Link href="/landlord-dashboard/properties/create">
            <Plus className="mr-2 h-4 w-4" />
            Add Property
          </Link>
        </Button>
      </div>

      {/* Search */}

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input placeholder="Search properties..." className="pl-10" />
        </div>

        <Button variant="outline" className="w-full sm:w-auto">
          Filter Status
        </Button>
      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-hidden rounded-xl border bg-card md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Type</th>

                <th className="p-4 text-left">Monthly Rent</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.data.map((property) => (
                <tr key={property.id} className="border-t">
                  <td className="p-4">
                    <h3 className="font-medium">{property.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      {property.location}
                    </p>
                  </td>

                  <td className="p-4">{property.category.name}</td>

                  <td className="p-4">${property.price}/month</td>

                  <td className="p-4">
                    <StatusBadge status={property.availability} />
                  </td>

                  <td className="p-4">
                    <Actions id={property.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card */}

      <div className="grid gap-4 md:hidden">
        {properties.data.map((property) => (
          <div
            key={property.id}
            className="space-y-3 rounded-xl border bg-card p-4"
          >
            <div>
              <h3 className="font-semibold">{property.title}</h3>

              <p className="text-sm text-muted-foreground">
                {property.location}
              </p>
            </div>

            <div className="flex justify-between text-sm">
              <span>Type</span>

              <span className="font-medium">{property.category.name}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Rent</span>

              <span className="font-medium">${property.price}/month</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Status</span>

              <StatusBadge status={property.availability} />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Actions id={property.id} />
            </div>
          </div>
        ))}
      </div>

      {properties.data.length === 0 && (
        <div className="py-16 text-center text-muted-foreground">
          No properties found.
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        status === "AVAILABLE"
          ? "bg-green-100 text-green-700"
          : status === "RENTED"
            ? "bg-blue-100 text-blue-700"
            : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  )
}

function Actions({ id }: { id: string }) {
  return (
    <>
      <Button size="icon" variant="outline">
        <Eye className="h-4 w-4" />
      </Button>

      <Button size="icon" variant="outline" asChild>
        <Link href={`/landlord-dashboard/properties/${id}/edit`}>
          <Pencil className="h-4 w-4" />
        </Link>
      </Button>

      <Button size="icon" variant="destructive">
        <Trash2 className="h-4 w-4" />
      </Button>
    </>
  )
}
