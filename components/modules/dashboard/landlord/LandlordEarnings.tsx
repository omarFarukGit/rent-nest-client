"use client"

import {
  ArrowDownLeft,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const stats = [
  {
    title: "Total Earnings",
    value: "$24,580",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "This Month",
    value: "$3,450",
    icon: Wallet,
    color: "text-blue-600",
  },
  {
    title: "Pending Payments",
    value: "$850",
    icon: CreditCard,
    color: "text-yellow-600",
  },
  {
    title: "Transactions",
    value: "148",
    icon: Calendar,
    color: "text-purple-600",
  },
]

const payments = [
  {
    id: 1,
    tenant: "Ahmed Rahman",
    property: "Modern Apartment",
    amount: "$450",
    date: "30 Jul 2026",
    status: "PAID",
  },
  {
    id: 2,
    tenant: "Sarah Khan",
    property: "Luxury Villa",
    amount: "$850",
    date: "28 Jul 2026",
    status: "PAID",
  },
  {
    id: 3,
    tenant: "Hasan Ali",
    property: "Office Space",
    amount: "$650",
    date: "25 Jul 2026",
    status: "PENDING",
  },
]

export default function LandlordEarnings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Earnings</h1>

          <p className="mt-2 text-muted-foreground">
            Track your rental income and payment history.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>

          <Button>Withdraw Balance</Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.title} className="rounded-xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>

                  <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
                </div>

                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Payments */}
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">Recent Payments</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">Tenant</th>

                <th className="p-4 text-left">Property</th>

                <th className="p-4 text-left">Amount</th>

                <th className="p-4 text-left">Date</th>

                <th className="p-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-t">
                  <td className="p-4 font-medium">{payment.tenant}</td>

                  <td className="p-4">{payment.property}</td>

                  <td className="p-4 font-semibold">{payment.amount}</td>

                  <td className="p-4">{payment.date}</td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        payment.status === "PAID"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {payments.length === 0 && (
            <div className="py-16 text-center">
              <ArrowDownLeft className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

              <h3 className="text-xl font-semibold">No Payments Yet</h3>

              <p className="mt-2 text-muted-foreground">
                Payment history will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
