// app/landlord-dashboard/rental-requests/page.tsx

import LandlordRentalRequests from "@/components/modules/dashboard/landlord/LandlordRentalRequests"
import { IRentalRequestResponse } from "@/types/RentalType"
import { getRentalRequestLandload } from "../../_actions/landloard/rentalActions"

export default async function RentalRequestsPage() {
  const requests: IRentalRequestResponse = await getRentalRequestLandload()
  return <LandlordRentalRequests requests={requests} />
}
