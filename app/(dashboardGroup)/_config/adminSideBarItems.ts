import {
  LayoutDashboard,
  Users,
  Home,
  FileText,
  Tags,
  BarChart3,
  Settings,
  UserCircle,
} from "lucide-react"

import { ISidebarItem } from "./sidebarMenuItems"

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Admin Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "Manage Users",
    href: "/admin-dashboard/users",
    icon: Users,
  },

  {
    label: "Manage Properties",
    href: "/admin-dashboard/properties",
    icon: Home,
  },

  {
    label: "Rental Requests",
    href: "/admin-dashboard/rental-requests",
    icon: FileText,
  },

  {
    label: "Categories",
    href: "/admin-dashboard/categories",
    icon: Tags,
  },

  // {
  //   label: "Reports",
  //   href: "/admin-dashboard/reports",
  //   icon: BarChart3,
  // },

  {
    label: "Profile",
    href: "/admin-dashboard/profile",
    icon: UserCircle,
  },

  {
    label: "Settings",
    href: "/admin-dashboard/settings",
    icon: Settings,
  },
]
