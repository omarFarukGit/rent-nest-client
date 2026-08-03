/* eslint-disable @typescript-eslint/no-explicit-any */
// app/properties/[id]/page.tsx

import PropertyDetails from "@/components/modules/property/PropertyDetails"
import { getAllProperties, getProperty } from "../../_actions/popertyActions"
import PropertyNotFound from "../../_components/PropertyNotFound"
import { getMe } from "@/services/getMe"

export default async function PropertyDetailsPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { id } = await params
  const result = await getProperty(id)

  if (!result?.data) {
    return <PropertyNotFound />
  }

  const user = await getMe()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PropertyDetails property={result.data} userExits={user.success} />
    </div>
  )
}

export async function generateStaticParams() {
  const properties = await getAllProperties()
  return properties?.data.map((property: any) => ({
    id: String(property.id),
  }))
}
