"use client"

import {
  CreditCard,
  Download,
  Calendar,
  CheckCircle,
  Clock,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { TPaymentResponse } from "@/types/PaymentType"

type Props = {
  payments: TPaymentResponse
}

export default function TenantPayments({ payments }: Props) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>

        <p className="mt-2 text-muted-foreground">
          Track your rental payments and transaction history.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Total Paid</p>

          <h2 className="mt-2 text-3xl font-bold">$5,400</h2>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Pending Payment</p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-600">$850</h2>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">Next Due Date</p>

          <h2 className="mt-2 text-3xl font-bold">01 Aug 2026</h2>
        </div>
      </div>

      {/* Payment History */}
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">Payment History</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Amount</th>

                <th className="p-4 text-left">Date</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {payments.data.map((payment) => (
                <tr key={payment.id} className="border-t">
                  <td className="p-4">
                    <h3 className="font-medium">
                      {payment.paymentDetails.propertyTitle}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {`TNX_ID_${payment.transactionId.slice(10, 20)}`}
                    </p>
                  </td>

                  <td className="p-4 font-semibold">{payment.amount}</td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />

                      {new Date(payment.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </td>

                  <td className="p-4">
                    {payment.status === "PAID" ? (
                      <span className="flex w-fit items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                        <CheckCircle className="h-3 w-3" />
                        PAID
                      </span>
                    ) : (
                      <span className="flex w-fit items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs text-yellow-700">
                        <Clock className="h-3 w-3" />
                        PENDING
                      </span>
                    )}
                  </td>

                  <td className="p-4 text-right">
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Receipt
                    </Button>
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
