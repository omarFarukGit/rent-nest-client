import { useSidebar } from "@/components/ui/sidebar"
import { FileText, LayoutDashboard, LucideProps } from "lucide-react"
import { ADMIN_SIDEBAR_ITEMS } from "./adminSideBarItems"
import { ForwardRefExoticComponent, RefAttributes } from "react"

 export type ISidebarItem = {
  label: string
  href: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/my-posts",
    icon: FileText,
  },
]
const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/landloard-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/my-posts",
    icon: FileText,
  },
]

export const sidebarMenuItems = {
  TENANT: TENANT_SIDEBAR_ITEMS,
  LANDLORD: LANDLORD_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
}
// const sidebarMenuItems={
//     USER:[],
//     AUTHOR:[],
//     ADMIN:[]
// }
