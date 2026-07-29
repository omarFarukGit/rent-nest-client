"use client"

import { Bell, User, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TUser } from "@/types/UserType"
import { logout } from "@/services/logOut"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

type Props = {
  user: TUser
}
export function DashboardNavbar({ user }: Props) {
  const router = useRouter()
  const handleMenuAction = async (action: string) => {
    if (action === "logout") {
      await logout()
      toast.success("Logout successfully")
      router.push("/login")
    }
  }
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-bold text-primary">Rent Nest</span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-red-500" />
          </Button>

          {/* User Menu Dropdown */}
          <div className="group relative">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Dropdown */}
            <div className="invisible absolute top-full right-0 mt-2 w-48 rounded-md border border-border bg-background shadow-lg group-hover:visible">
              <button className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-accent">
                <User className="h-4 w-4" />
                Profile
              </button>
              <button className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-accent">
                <Settings className="h-4 w-4" />
                Settings
              </button>
              <hr className="my-1 border-border" />
              <button
                onClick={async () => {
                  handleMenuAction("logout")
                }}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-accent"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
