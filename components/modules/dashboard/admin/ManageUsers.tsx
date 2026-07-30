"use client";

import {
  Search,
  MoreHorizontal,
  UserCheck,
  UserX,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const users = [
  {
    id: 1,
    name: "Ahmed Rahman",
    email: "ahmed@gmail.com",
    role: "TENANT",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Sarah Khan",
    email: "sarah@gmail.com",
    role: "LANDLORD",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Hasan Ali",
    email: "hasan@gmail.com",
    role: "TENANT",
    status: "BLOCKED",
  },
];


export default function ManageUsers() {
  return (
    <div className="space-y-6">


      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Manage Users
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage tenants, landlords and user permissions.
        </p>
      </div>



      {/* Search + Filter */}
      <div className="flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <Search
            className="
              absolute
              left-3
              top-3
              h-5
              w-5
              text-muted-foreground
            "
          />

          <Input
            placeholder="Search users..."
            className="pl-10"
          />

        </div>


        <Button variant="outline">
          Filter Role
        </Button>

      </div>



      {/* Table */}
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          bg-card
        "
      >

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead
              className="
                border-b
                bg-muted/50
              "
            >
              <tr>

                <th className="p-4 text-left text-sm">
                  User
                </th>

                <th className="p-4 text-left text-sm">
                  Role
                </th>

                <th className="p-4 text-left text-sm">
                  Status
                </th>

                <th className="p-4 text-left text-sm">
                  Action
                </th>

              </tr>
            </thead>



            <tbody>

              {users.map((user) => (

                <tr
                  key={user.id}
                  className="border-b last:border-none"
                >

                  {/* User */}
                  <td className="p-4">

                    <div>
                      <h3 className="font-medium">
                        {user.name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>

                  </td>



                  {/* Role */}
                  <td className="p-4">

                    <span
                      className="
                        rounded-full
                        bg-primary/10
                        px-3
                        py-1
                        text-xs
                        text-primary
                      "
                    >
                      {user.role}
                    </span>

                  </td>



                  {/* Status */}
                  <td className="p-4">

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        ${
                          user.status === "ACTIVE"
                            ? "bg-green-500/10 text-green-600"
                            : "bg-red-500/10 text-red-600"
                        }
                      `}
                    >
                      {user.status}
                    </span>

                  </td>



                  {/* Action */}
                  <td className="p-4">

                    <div className="flex gap-2">

                      <Button
                        size="icon"
                        variant="outline"
                      >
                        {
                          user.status === "ACTIVE"
                            ?
                            <UserX className="h-4 w-4" />
                            :
                            <UserCheck className="h-4 w-4" />
                        }
                      </Button>


                      <Button
                        size="icon"
                        variant="ghost"
                      >
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
  );
}