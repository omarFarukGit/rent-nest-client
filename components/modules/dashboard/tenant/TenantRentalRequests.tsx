"use client"

import { Calendar, Home, Search, X, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TRentalRequestsResponse } from "@/types/RentType"
import { useTransition } from "react"
import { createPayment } from "@/app/(dashboardGroup)/_actions/tenant/managePaymentAction"

import { toast } from "sonner"
import { cancelRentalRequest } from "@/app/(dashboardGroup)/_actions/tenant/manageRentalActions"
import { IRentalStatisticsResponse } from "@/types/RentalType"

type Props = {
  requests: TRentalRequestsResponse
  stats: IRentalStatisticsResponse
}

export default function TenantRentalRequests({ requests, stats }: Props) {
  const [isPending, startTransition] = useTransition()
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="mt-2 text-muted-foreground">
          Track your property rental requests and payments.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Total Requests</p>

          <h2 className="mt-2 text-3xl font-bold">{stats.data.total}</h2>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Approved</p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {stats.data.approved}
          </h2>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Pending</p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            {stats.data.pending}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input placeholder="Search rental requests..." className="pl-10" />
        </div>

        <Button variant="outline">Filter</Button>
      </div>

      {/* Requests List */}
      <div className="space-y-5">
        {requests.data.map((request) => (
          <div key={request.id} className="rounded-xl border bg-card p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              {/* Property Info */}

              <div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />

                  <h2 className="text-lg font-semibold">
                    {request.property.title}
                  </h2>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {request.property.location}
                </p>

                <p className="mt-2 font-medium">
                  Rent: {request.property.price}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />

                  {new Date(request.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>

              {/* Action */}

              <div className="flex flex-col items-end gap-3">
                {/* Request Status */}

                <span
                  className={`rounded-full px-4 py-1 text-xs font-medium ${
                    request.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : request.status === "REJECTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  } `}
                >
                  {request.status}
                </span>

                {/* Pay Button */}
                {request?.payment?.status === "PAID" ? (
                  <Button variant="outline" size="sm">
                    Payment Completed
                  </Button>
                ) : request.status === "APPROVED" ? (
                  <Button
                    size="sm"
                    disabled={isPending}
                    onClick={() => {
                      startTransition(async () => {
                        await createPayment({
                          rentalRequestId: request.id,
                          amount: Number(request.property.price),
                          provider: "STRIPE",
                        })
                      })
                    }}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    {isPending ? "Processing..." : "Pay Now"}
                  </Button>
                ) : null}

                {/* Cancel Request */}

                {request.status === "PENDING" && (
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={isPending}
                    onClick={() => {
                      startTransition(async () => {
                        const result = await cancelRentalRequest(request.id)

                        if (result.success) {
                          toast.success("Rental request cancelled successfully")
                        } else {
                          toast.error(
                            result.message || "Failed to cancel request"
                          )
                        }
                      })
                    }}
                  >
                    <X className="mr-2 h-4 w-4" />
                    {isPending ? "Cancelling..." : "Cancel Request"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
