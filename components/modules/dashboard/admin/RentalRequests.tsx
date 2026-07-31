"use client"

import { Search, Eye, Check, X, MoreHorizontal } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { IRentalRequestResponse } from "@/types/RentalType"
import Link from "next/link"
import { useTransition } from "react"
import { updateRentalRequest } from "@/app/(dashboardGroup)/_actions/admin/manageRentalActions"
import { toast } from "sonner"

type Props = {
  rentalRequests: IRentalRequestResponse
}

export default function RentalRequests({ rentalRequests }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleUpdateRequest = (
    requestId: string,
    status: "APPROVED" | "REJECTED"
  ) => {
    startTransition(async () => {
      try {
        const res = await updateRentalRequest(requestId, status)

        if (res.success) {
          toast.success(
            status === "APPROVED"
              ? "Rental request approved successfully."
              : "Rental request rejected successfully."
          )
        } else {
          toast.error(res.message || "Failed to update rental request.")
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.")
      }
    })
  }
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="mt-2 text-muted-foreground">
          Manage all tenant rental requests.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-5 w-5 text-muted-foreground" />

          <Input placeholder="Search rental requests..." className="pl-10" />
        </div>

        <Button variant="outline">Filter Status</Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left text-sm">Tenant</th>

                <th className="p-4 text-left text-sm">Property</th>

                <th className="p-4 text-left text-sm">Landlord</th>

                <th className="p-4 text-left text-sm">Date</th>

                <th className="p-4 text-left text-sm">Status</th>

                <th className="p-4 text-left text-sm">Action</th>
              </tr>
            </thead>

            <tbody>
              {rentalRequests.data.map((request) => (
                <tr key={request.id} className="border-b last:border-none">
                  {/* Tenant */}
                  <td className="p-4">
                    <h3 className="font-medium">{request.tenant.name}</h3>

                    <p className="text-sm text-muted-foreground">
                      {request.tenant.email}
                    </p>
                  </td>

                  {/* Property */}
                  <td className="p-4">
                    <p className="font-medium">{request.property.title}</p>
                  </td>

                  {/* Landlord */}
                  <td className="p-4">{request.landlord.name}</td>

                  {/* Date */}
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(request.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        request.status === "APPROVED"
                          ? "bg-green-500/10 text-green-600"
                          : request.status === "REJECTED"
                            ? "bg-red-500/10 text-red-600"
                            : "bg-yellow-500/10 text-yellow-600"
                      } `}
                    >
                      {request.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Link href={`/properties/${request.property.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>

                      {request.status === "PENDING" && (
                        <>
                          <Button
                            size="icon"
                            variant="outline"
                            className="text-green-600"
                            disabled={isPending}
                            onClick={() =>
                              handleUpdateRequest(request.id, "APPROVED")
                            }
                          >
                            <Check className="h-4 w-4" />
                          </Button>

                          <Button
                            size="icon"
                            variant="outline"
                            className="text-red-600"
                            disabled={isPending}
                            onClick={() =>
                              handleUpdateRequest(request.id, "REJECTED")
                            }
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}

                      <Button size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
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
