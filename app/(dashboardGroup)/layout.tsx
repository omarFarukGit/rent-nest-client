import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardSidebar from "./_components/DashboardSidebar"
import { DashboardNavbar } from "./_components/DashboardNavbar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <DashboardNavbar />
        <SidebarProvider>
          <div className="flex flex-1">
            <DashboardSidebar />
            <main className="ml-64 min-w-0 flex-1">{children}</main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  )
}
