import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "./_components/DashboardSidebar"
import { DashboardNavbar } from "./_components/DashboardNavbar"
import { getMe } from "@/services/getMe"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getMe()

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen w-full">
        {/* Navbar */}
        <DashboardNavbar user={user.data} />

        <div className="flex">
          {/* Sidebar */}
          <DashboardSidebar user={user.data} />

          {/* Content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
