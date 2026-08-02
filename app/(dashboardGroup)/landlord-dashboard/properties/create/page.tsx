// app/landlord-dashboard/properties/create/page.tsx

import AddPropertyForm from "@/components/modules/dashboard/landlord/AddPropertyForm"

import { getAllCategory } from "@/services/category"

export default async function AddPropertyPage() {
  const categories = await getAllCategory()

  return <AddPropertyForm categories={categories.data} />
}
