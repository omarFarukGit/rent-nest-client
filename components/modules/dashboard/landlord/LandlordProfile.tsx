"use client"

import {
  Building2,
  Mail,
  MapPin,
  Phone,
  User,
  Edit,
  Lock,
  Home,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { TUser } from "@/types/UserType"

type Props = {
  user: TUser
}
export default function LandlordProfile({ user }: Props) {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>

        <p className="mt-2 text-muted-foreground">
          View and manage your landlord profile.
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10">
            <User className="h-12 w-12 text-primary" />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold">{user?.name}</h2>

            <p className="text-muted-foreground">{user?.role}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                {user.email}
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                {user.phone ?? "+8801700000000"}
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {user.address ?? "Dhaka, Bangladesh"}
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>

            <Button variant="outline">
              <Lock className="mr-2 h-4 w-4" />
              Change Password
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      {/* <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Properties</p>

              <h2 className="mt-2 text-3xl font-bold">18</h2>
            </div>

            <Building2 className="h-10 w-10 text-primary" />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Rentals</p>

              <h2 className="mt-2 text-3xl font-bold">12</h2>
            </div>

            <Home className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Tenants</p>

              <h2 className="mt-2 text-3xl font-bold">24</h2>
            </div>

            <Users className="h-10 w-10 text-blue-600" />
          </div>
        </div>
      </div> */}

      {/* About */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">About</h2>

        <p className="mt-4 leading-7 text-muted-foreground">
          I am an experienced landlord managing residential and commercial
          properties across multiple locations. My goal is to provide safe,
          comfortable, and affordable rental spaces while ensuring an excellent
          experience for all tenants.
        </p>
      </div>
    </div>
  )
}
