"use client"

import { Search, Eye, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IRentalRequestResponse } from "@/types/RentalType"

// const tenants = [
//   {
//     id: "1",
//     tenant: {
//       name: "Ahmed Rahman",
//       email: "ahmed@gmail.com",
//       phone: "+8801711111111",
//     },
//     property: {
//       title: "Modern Family Apartment",
//       price: 450,
//     },
//     startDate: "2026-08-01",
//     endDate: "2027-07-31",
//     status: "ACTIVE",
//   },
//   {
//     id: "2",
//     tenant: {
//       name: "Sarah Khan",
//       email: "sarah@gmail.com",
//       phone: "+8801722222222",
//     },
//     property: {
//       title: "Luxury Villa",
//       price: 850,
//     },
//     startDate: "2026-06-15",
//     endDate: "2027-06-14",
//     status: "ACTIVE",
//   },
//   {
//     id: "3",
//     tenant: {
//       name: "Hasan Ali",
//       email: "hasan@gmail.com",
//       phone: "+8801733333333",
//     },
//     property: {
//       title: "Office Space",
//       price: 650,
//     },
//     startDate: "2025-09-01",
//     endDate: "2026-09-01",
//     status: "ENDING_SOON",
//   },
// ]

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
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search by tenant or property..."
            className="pl-10"
          />
        </div>

        <Button variant="outline">Filter</Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card">
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
                    <h3 className="font-medium">{item.tenant.name}</h3>

                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {item.tenant.email}
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {item.tenant.phone}
                      </div>
                    </div>
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
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status === "APPROVED" ? "Ending Soon" : "Active"}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end">
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {tenants.data.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              No tenants found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
