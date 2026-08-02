import LandlordDashboardHome from "@/components/modules/dashboard/landlord/LandlordDashboardHome"
import { getLandlordDashboard } from "../_actions/landloard/statsActions"

export default async function DashboardPage() {
  const dashboard = await getLandlordDashboard()
  console.log(dashboard)

  return (
    <LandlordDashboardHome
      stats={dashboard.data.stats}
      requests={dashboard.data.recentRequests}
    />
  )
}
