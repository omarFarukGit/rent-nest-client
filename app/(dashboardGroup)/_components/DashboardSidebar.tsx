"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarMenuItems, ISidebarItem } from "../_config/sidebarMenuItems";
import { TUser } from "@/types/UserType";

type Props = {
  user: TUser;
};

export default function DashboardSidebar({ user }: Props) {
  const pathname = usePathname();

  let navItems: ISidebarItem[] = [];

  switch (user.role) {
    case "TENANT":
      navItems = sidebarMenuItems.TENANT;
      break;

    case "LANDLORD":
      navItems = sidebarMenuItems.LANDLORD;
      break;

    case "ADMIN":
      navItems = sidebarMenuItems.ADMIN;
      break;

    default:
      navItems = [];
  }

  return (
    <Sidebar
      variant="sidebar"
      collapsible="offcanvas"
      className="border-r pt-16"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}