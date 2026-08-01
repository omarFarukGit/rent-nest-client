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
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
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
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input placeholder="Search properties..." className="pl-10" />
        </div>

        <Button variant="outline">Filter Status</Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card">
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
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        property.availability === "AVAILABLE"
                          ? "bg-green-100 text-green-700"
                          : property.availability === "RENTED"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {property.availability}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button size="icon" variant="outline">
                        <Pencil className="h-4 w-4" />
                      </Button>

                      <Button size="icon" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {properties.data.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              No properties found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
