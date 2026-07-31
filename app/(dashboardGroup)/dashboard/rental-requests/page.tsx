// app/dashboard/rental-requests/page.tsx

import TenantRentalRequests from "@/components/modules/dashboard/tenant/TenantRentalRequests"
import { getMyRentalRequest } from "../../_actions/tenant/manageRentalActions"

export default async function RentalRequestsPage() {
  const requests = await getMyRentalRequest()
  return <TenantRentalRequests requests={requests} />
}
