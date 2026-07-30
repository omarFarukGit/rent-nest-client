import { useSidebar } from "@/components/ui/sidebar"
import { FileText, LayoutDashboard, LucideProps } from "lucide-react"
import { ADMIN_SIDEBAR_ITEMS } from "./adminSideBarItems"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import { LANDLORD_SIDEBAR_ITEMS } from "./landloardMenuItems"
import { TENANT_SIDEBAR_ITEMS } from "./tenantSideBatItems"

export type ISidebarItem = {
  label: string
  href: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}

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
