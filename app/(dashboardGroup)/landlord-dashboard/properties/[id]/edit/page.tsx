import { getProperty } from "@/app/(publicGroup)/_actions/popertyActions"
import UpdatePropertyForm from "@/components/modules/property/UpdatePropertyForm"

type Props = {
  params: {
    id: string
  }
}

export default async function EditPropertyPage({ params }: Props) {
  const { id } = await params

  const property = await getProperty(id)
  console.log(id, property)
  return (
    <div className="p-6">
      <UpdatePropertyForm property={property.data} />
    </div>
  )
}
