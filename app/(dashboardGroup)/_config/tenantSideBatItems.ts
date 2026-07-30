import {
  LayoutDashboard,
  Search,
  FileText,
  Home,
  Heart,
  MessageCircle,
  CreditCard,
  UserCircle,
  Settings,
} from "lucide-react"

import { ISidebarItem } from "./sidebarMenuItems"

export const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "Rental Requests",
    href: "/dashboard/rental-requests",
    icon: FileText,
  },

  {
    label: "My Rentals",
    href: "/dashboard/my-rentals",
    icon: Home,
  },

  {
    label: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },

  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: UserCircle,
  },

  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]
