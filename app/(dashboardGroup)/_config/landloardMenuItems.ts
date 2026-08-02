import {
  LayoutDashboard,
  Building2,
  PlusCircle,
  FileText,
  Users,
  DollarSign,
  Star,
  UserCircle,
  Settings,
} from "lucide-react";

import { ISidebarItem } from "./sidebarMenuItems";


export const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/landlord-dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "My Properties",
    href: "/landlord-dashboard/properties",
    icon: Building2,
  },

  {
    label: "Add Property",
    href: "/landlord-dashboard/properties/create",
    icon: PlusCircle,
  },

  {
    label: "Rental Requests",
    href: "/landlord-dashboard/rental-requests",
    icon: FileText,
  },

  {
    label: "My Tenants",
    href: "/landlord-dashboard/tenants",
    icon: Users,
  },

  // {
  //   label: "Earnings",
  //   href: "/landlord-dashboard/earnings",
  //   icon: DollarSign,
  // },

  // {
  //   label: "Reviews",
  //   href: "/landlord-dashboard/reviews",
  //   icon: Star,
  // },

  {
    label: "Profile",
    href: "/landlord-dashboard/profile",
    icon: UserCircle,
  },

  {
    label: "Settings",
    href: "/landlord-dashboard/settings",
    icon: Settings,
  },
];