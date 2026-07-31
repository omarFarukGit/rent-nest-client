// app/admin-dashboard/properties/page.tsx

import ManageProperties from "@/components/modules/dashboard/admin/ManageProperties"
import { TPropertiesResponse } from "@/types/PropertyType"
import { getByAdminAllPorperties } from "../../_actions/admin/managePorpertyActions"

export default async function PropertiesPage() {
  const properties: TPropertiesResponse = await getByAdminAllPorperties()
  return <ManageProperties properties={properties} />
}
