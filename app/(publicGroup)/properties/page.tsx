import PropertyPage from "@/components/modules/property/PropertyPage"
import { getAllProperties } from "../_actions/popertyActions"
import { TCategoriesResponse } from "@/types/CategoryType"
import { getAllCategory } from "@/services/category"

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string
    category?: string
    minPrice?: string
    maxPrice?: string
  }>
}) {
  const query = await searchParams

  const properties = await getAllProperties(query);
  const categories: TCategoriesResponse = await getAllCategory()

  return <div>
    <PropertyPage properties={properties} categories={categories} />

  </div>
}
