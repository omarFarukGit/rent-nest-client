"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { TUser } from "@/types/UserType"
import { logout } from "@/services/logOut"

// Navigation items configuration
const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Categories", href: "/categories" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
]

// User menu items configuration
const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
]

type Props = {
  user: TUser
}

export function Navbar({ user }: Props) {
  const router = useRouter()

  const handleMenuAction = async (action: string) => {
    if (action === "dashboard") {
      if (user.role === "TENANT") {
        router.push("/dashboard")
      } else if (user.role === "LANDLORD") {
        router.push("/landloard-dashboard")
      } else if (user.role === "ADMIN") {
        router.push("/admin-dashboard")
      }
    }
    if (action === "logout") {
      await logout()
      toast.success("Logout successfully")
      router.push("/login")
    }
  }
  return (
    <nav className="sticky top-0 container mx-auto border-b border-border bg-white/10 backdrop-blur-xl dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-2xl font-bold text-primary">Rent Nest</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:transform md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Dropdown */}

          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <DropdownMenuItem
                      key={index}
                      onClick={async () => {
                        handleMenuAction(item.action)
                      }}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  )
                })}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    handleMenuAction("logout")
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {!user && (
            <Link href={"/login"}>
              <Button className="cursor-pointer">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
