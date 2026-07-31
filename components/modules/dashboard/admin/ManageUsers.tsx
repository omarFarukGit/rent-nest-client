"use client"

import { MoreHorizontal, Search, UserCheck, UserX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IUser } from "@/types/UserType"
import { useTransition } from "react"
import { updateUserStatus } from "@/app/(dashboardGroup)/_actions/admin/manageUserAction"
import { toast } from "sonner"

type Props = {
  users: IUser[]
}

export default function ManageUsers({ users }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleUpdateStatus = (
    id: string,
    currentStatus: "ACTIVE" | "BLOCKED"
  ) => {
    startTransition(async () => {
      try {
        const newStatus = currentStatus === "ACTIVE" ? "BLOCKED" : "ACTIVE"

        const res = await updateUserStatus(id, newStatus)

        if (res.success) {
          toast.success(
            newStatus === "BLOCKED"
              ? "User has been blocked successfully."
              : "User has been activated successfully."
          )
        } else {
          toast.error(res.message || "Failed to update user status.")
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.")
      }
    })
  }
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold md:text-3xl">Manage Users</h1>

        <p className="text-sm text-muted-foreground md:text-base">
          Manage tenants, landlords and user permissions.
        </p>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

          <Input placeholder="Search users..." className="pl-10" />
        </div>

        <Button variant="outline" className="w-full sm:w-auto">
          Filter Role
        </Button>
      </div>

      {/* ===================== Mobile Cards ===================== */}
      <div className="space-y-4 md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border bg-card p-4 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h3 className="truncate font-semibold">{user.name}</h3>

                <p className="text-sm break-all text-muted-foreground">
                  {user.email}
                </p>
              </div>

              <Button size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Role</span>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {user.role}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    user.status === "ACTIVE"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-red-500/10 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="flex justify-end">
                <Button
                  size="icon"
                  variant="outline"
                  disabled={isPending}
                  onClick={() => handleUpdateStatus(user.id, user.status)}
                >
                  {user.status === "ACTIVE" ? (
                    <UserX className="h-4 w-4" />
                  ) : (
                    <UserCheck className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== Desktop Table ===================== */}
      <div className="hidden overflow-hidden rounded-xl border bg-card md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left text-sm font-semibold">User</th>

                <th className="p-4 text-left text-sm font-semibold">Role</th>

                <th className="p-4 text-left text-sm font-semibold">Status</th>

                <th className="p-4 text-right text-sm font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b transition-colors last:border-none hover:bg-muted/40"
                >
                  {/* User */}
                  <td className="p-4">
                    <div>
                      <h3 className="font-medium">{user.name}</h3>

                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="p-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        user.status === "ACTIVE"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-red-500/10 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        disabled={isPending}
                        onClick={() => handleUpdateStatus(user.id, user.status)}
                      >
                        {user.status === "ACTIVE" ? (
                          <UserX className="h-4 w-4" />
                        ) : (
                          <UserCheck className="h-4 w-4" />
                        )}
                      </Button>

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
