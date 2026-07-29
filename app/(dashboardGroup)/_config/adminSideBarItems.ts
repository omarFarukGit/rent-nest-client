import { FileText, LayoutDashboard } from "lucide-react"
import { ISidebarItem } from "./sidebarMenuItems"

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Amin Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/my-posts",
    icon: FileText,
  },
]
