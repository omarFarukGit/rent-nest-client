// app/landlord-dashboard/tenants/page.tsx

import MyTenants from "@/components/modules/dashboard/landlord/MyTenants"
import { myTenants } from "../../_actions/landloard/rentalActions"
import { IRentalRequestResponse } from "@/types/RentalType"

export default async function MyTenantsPage() {
  const tenants: IRentalRequestResponse = await myTenants()
  return <MyTenants tenants={tenants} />
}
