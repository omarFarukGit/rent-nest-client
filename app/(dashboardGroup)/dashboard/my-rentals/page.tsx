// app/dashboard/my-rentals/page.tsx

import MyRentals from "@/components/modules/dashboard/tenant/MyRentals"
import { getMyRentalRequest } from "../../_actions/tenant/manageRentalActions"

export default async function MyRentalsPage() {
  const rentals = await getMyRentalRequest()

  return <MyRentals rentals={rentals} />
}
