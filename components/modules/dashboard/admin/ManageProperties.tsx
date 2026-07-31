"use client"

import { Search, MoreHorizontal, Eye, Trash2, CheckCircle } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TPropertiesResponse } from "@/types/PropertyType"
import { useTransition } from "react"
import { deleteProperty } from "@/app/(dashboardGroup)/_actions/admin/managePorpertyActions"
import Link from "next/link"

// const properties = [
//   {
//     id: 1,
//     title: "Modern Family Apartment",
//     owner: "Ahmed Rahman",
//     location: "Dhanmondi, Dhaka",
//     type: "APARTMENT",
//     price: 25000,
//     status: "AVAILABLE",
//   },
//   {
//     id: 2,
//     title: "Luxury Villa",
//     owner: "Sarah Khan",
//     location: "Uttara, Dhaka",
//     type: "VILLA",
//     price: 50000,
//     status: "RENTED",
//   },
//   {
//     id: 3,
//     title: "Office Space",
//     owner: "Hasan Ali",
//     location: "Gulshan, Dhaka",
//     type: "OFFICE",
//     price: 70000,
//     status: "PENDING",
//   },
// ]

type Props = {
  properties: TPropertiesResponse
}

export default function ManageProperties({ properties }: Props) {
  const [isPending, startTransition] = useTransition()
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold md:text-3xl">Manage Properties</h1>

        <p className="text-sm text-muted-foreground md:text-base">
          Manage all rental properties listed on RentNest.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search properties..." className="pl-10" />
        </div>

        <Button variant="outline" className="w-full lg:w-auto">
          Filter Status
        </Button>

        <Button variant="outline" className="w-full lg:w-auto">
          Filter Type
        </Button>
      </div>

      {/* ================= Mobile Card ================= */}
      <div className="space-y-4 md:hidden">
        {properties.data.map((property) => (
          <div
            key={property.id}
            className="rounded-xl border bg-card p-4 shadow-sm"
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h3 className="truncate font-semibold">{property.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {property.location}
                </p>
              </div>

              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            {/* Details */}
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Owner</span>

                <span className="text-sm font-medium">
                  {property.landlord.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Type</span>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  {property.category.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Price</span>

                <span className="font-medium">${property.price}/month</span>
              </div>

              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    property.availability === "AVAILABLE"
                      ? "bg-green-500/10 text-green-600"
                      : property.availability === "RENTED"
                        ? "bg-blue-500/10 text-blue-600"
                        : "bg-yellow-500/10 text-yellow-600"
                  } `}
                >
                  {property.availability}
                </span>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-2">
                <Button size="icon" variant="outline">
                  <Link href={`/properties/${property.id}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  className="cursor-pointer"
                  size="icon"
                  variant="destructive"
                >
                  <Trash2
                    onClick={() => {
                      startTransition(async () => {
                        await deleteProperty(property.id)
                      })
                    }}
                    className="h-4 w-4"
                  />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Desktop Table ================= */}

      <div className="hidden overflow-hidden rounded-xl border bg-card md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left text-sm">Property</th>

                <th className="p-4 text-left text-sm">Owner</th>

                <th className="p-4 text-left text-sm">Type</th>

                <th className="p-4 text-left text-sm">Price</th>

                <th className="p-4 text-left text-sm">Status</th>

                <th className="p-4 text-left text-sm">Action</th>
              </tr>
            </thead>

            <tbody>
              {properties.data.map((property) => (
                <tr
                  key={property.id}
                  className="border-b transition-colors last:border-none hover:bg-muted/40"
                >
                  <td className="p-4">
                    <h3 className="font-medium">{property.title}</h3>

                    <p className="text-sm text-muted-foreground">
                      {property.location}
                    </p>
                  </td>

                  <td className="p-4 text-sm">{property.landlord.name}</td>

                  <td className="p-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {property.category.name}
                    </span>
                  </td>

                  <td className="p-4 font-medium">${property.price}/month</td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        property.availability === "AVAILABLE"
                          ? "bg-green-500/10 text-green-600"
                          : property.availability === "RENTED"
                            ? "bg-blue-500/10 text-blue-600"
                            : "bg-yellow-500/10 text-yellow-600"
                      } `}
                    >
                      {property.availability}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Link href={`/properties/${property.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>

                      <Button
                        className="cursor-pointer"
                        onClick={() => {
                          startTransition(async () => {
                            await deleteProperty(property.id)
                          })
                        }}
                        size="icon"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
