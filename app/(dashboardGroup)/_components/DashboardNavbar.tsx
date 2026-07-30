"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Bell, LogOut, Menu, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { logout } from "@/services/logOut"
import { toast } from "sonner"
import { TUser } from "@/types/UserType"

type Props = {
  user: TUser
}

export function DashboardNavbar({ user }: Props) {
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    toast.success("Logout successfully")
    router.push("/login")
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Button */}
          <SidebarTrigger className="md:hidden">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>

          <Link href="/" className="text-lg font-bold text-primary md:text-2xl">
            Rent Nest
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Notification */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />

            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2">
                <User className="h-5 w-5" />

                <span className="hidden md:inline">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
