"use client";

import { Search, Eye, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tenants = [
  {
    id: 1,
    name: "Ahmed Rahman",
    email: "ahmed@gmail.com",
    phone: "+8801711111111",
    property: "Modern Family Apartment",
    rent: "$450",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Sarah Khan",
    email: "sarah@gmail.com",
    phone: "+8801722222222",
    property: "Luxury Villa",
    rent: "$850",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Hasan Ali",
    email: "hasan@gmail.com",
    phone: "+8801733333333",
    property: "Office Space",
    rent: "$650",
    status: "ENDING SOON",
  },
];

export default function MyTenants() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          My Tenants
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage all tenants currently renting your properties.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search tenants..."
            className="pl-10"
          />
        </div>

        <Button variant="outline">
          Filter
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="p-4 text-left">
                  Tenant
                </th>

                <th className="p-4 text-left">
                  Property
                </th>

                <th className="p-4 text-left">
                  Monthly Rent
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {tenants.map((tenant) => (
                <tr
                  key={tenant.id}
                  className="border-t"
                >
                  <td className="p-4">
                    <h3 className="font-medium">
                      {tenant.name}
                    </h3>

                    <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {tenant.email}
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {tenant.phone}
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    {tenant.property}
                  </td>

                  <td className="p-4 font-medium">
                    {tenant.rent}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        tenant.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {tenant.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="icon"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {tenants.length === 0 && (
            <div className="py-16 text-center text-muted-foreground">
              No tenants found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}