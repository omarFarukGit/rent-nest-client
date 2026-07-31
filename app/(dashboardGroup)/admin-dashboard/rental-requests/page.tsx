// app/admin-dashboard/rental-requests/page.tsx

import RentalRequests from "@/components/modules/dashboard/admin/RentalRequests"
import { IRentalRequestResponse } from "@/types/RentalType"
import { getRentalRequests } from "../../_actions/admin/manageRentalActions"

export default async function RentalRequestsPage() {
  const rentalRequests: IRentalRequestResponse = await getRentalRequests()
  return <RentalRequests rentalRequests={rentalRequests} />
}
