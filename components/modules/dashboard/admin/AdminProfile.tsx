import {
  Mail,
  Phone,
  ShieldCheck,
  User,
  CalendarDays,
  Edit,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { TUser } from "@/types/UserType"

type Props = {
  admin: TUser
}

export default function AdminProfile({ admin }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Admin Profile</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your admin account information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* Avatar */}
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary">
            <User className="h-12 w-12" />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{admin.name}</h2>

            <div className="mt-2 flex flex-wrap gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                {admin.role}
              </span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-600">
                {admin.status}
              </span>
            </div>
          </div>

          {/* Edit Button */}
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-xl font-semibold">Personal Information</h3>

          <div className="mt-5 space-y-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Email</p>

                <p className="font-medium">{admin.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Phone</p>

                <p className="font-medium">
                  {admin.phone ?? "please added your number"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-primary" />

              <div>
                <p className="text-sm text-muted-foreground">Joined</p>

                <p className="font-medium">
                  {" "}
                  {new Date(admin.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-primary" />

            <h3 className="text-xl font-semibold">Security</h3>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Keep your admin account secure by updating password regularly.
          </p>

          <Button variant="outline" className="mt-6">
            Change Password
          </Button>
        </div>
      </div>
    </div>
  )
}
