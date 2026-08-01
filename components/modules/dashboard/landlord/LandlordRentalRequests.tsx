"use client"

import { Check, Eye, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IRentalRequestResponse } from "@/types/RentalType"
import { useTransition } from "react"
import { toast } from "sonner"
import { updateRentalRequestLandload } from "@/app/(dashboardGroup)/_actions/landloard/rentalActions"
import Link from "next/link"

type Props = {
  requests: IRentalRequestResponse
}

export default function LandlordRentalRequests({ requests }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleUpdateRequest = (
    requestId: string,
    status: "APPROVED" | "REJECTED"
  ) => {
    startTransition(async () => {
      try {
        const res = await updateRentalRequestLandload(requestId, status)

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
          Review and manage requests from tenants.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input placeholder="Search requests..." className="pl-10" />
        </div>

        <Button variant="outline">Filter Status</Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">Tenant</th>

                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Requested On</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.data.map((request) => (
                <tr key={request.id} className="border-t">
                  <td className="p-4">
                    <h3 className="font-medium">{request.tenant.name}</h3>

                    <p className="text-sm text-muted-foreground">
                      {request.tenant.email}
                    </p>
                  </td>

                  <td className="p-4">{request.property.title}</td>

                  <td className="p-4">
                    {" "}
                    {new Date(request.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        request.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : request.status === "REJECTED"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
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
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {requests.data.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              No rental requests found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
