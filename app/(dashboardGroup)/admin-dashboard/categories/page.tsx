// app/admin-dashboard/categories/page.tsx

import ManageCategories from "@/components/modules/dashboard/admin/ManageCategories"
import { getAllCategory } from "../../_actions/admin/manageCategoryActions"
import { TCategoriesResponse } from "@/types/CategoryType"

export default async function CategoriesPage() {
  const categories: TCategoriesResponse = await getAllCategory()
  return <ManageCategories categories={categories} />
}
