"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { LayoutDashboard, LogOut, Settings, User, Menu } from "lucide-react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { Button } from "../ui/button"
import { TUser } from "@/types/UserType"
import { logout } from "@/services/logOut"
import { ModeToggle } from "./ModeToggle"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
]

const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
]

type Props = {
  user?: TUser
}

export function Navbar({ user }: Props) {
  const router = useRouter()

  const handleMenuAction = async (action: string) => {
    if (action === "dashboard") {
      if (user?.role === "TENANT") {
        router.push("/dashboard")
      } else if (user?.role === "LANDLORD") {
        router.push("/landlord-dashboard")
      } else if (user?.role === "ADMIN") {
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-bold text-primary">Rent Nest</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="mt-8 flex flex-col gap-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="pl-2 text-lg font-medium hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* User Dropdown */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="cursor-pointer">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                </button>
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

                {userMenuItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <DropdownMenuItem
                      key={item.action}
                      onClick={() => handleMenuAction(item.action)}
                    >
                      <Icon className="mr-2 h-4 w-4" />

                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  )
                })}

                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={() => handleMenuAction("logout")}>
                  <LogOut className="mr-2 h-4 w-4" />

                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {/* Login Button */}
          {!user && (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
