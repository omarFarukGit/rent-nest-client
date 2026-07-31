// app/dashboard/rental-requests/page.tsx

import TenantRentalRequests from "@/components/modules/dashboard/tenant/TenantRentalRequests"
import {
  getMyRentalRequest,
  getRentalStats,
} from "../../_actions/tenant/manageRentalActions"

export default async function RentalRequestsPage() {
  const requests = await getMyRentalRequest()
  const stats = await getRentalStats()
  return <TenantRentalRequests requests={requests} stats={stats}/>
}
