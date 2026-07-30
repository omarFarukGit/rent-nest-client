// app/properties/[id]/page.tsx

import PropertyDetails from "@/components/modules/property/PropertyDetails"
import { getProperty } from "../../_actions/popertyActions"
import PropertyNotFound from "../../_components/PropertyNotFound"

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
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PropertyDetails property={result.data} />
    </div>
  )
}
