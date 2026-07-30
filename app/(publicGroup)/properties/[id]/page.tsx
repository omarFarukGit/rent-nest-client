// app/properties/[id]/page.tsx

import PropertyDetails from "@/components/modules/property/PropertyDetails"

async function getProperty(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`,
    {
      cache: "no-store",
    }
  )

  return res.json()
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: {
    id: string
  }
}) {
  const { id } = await params
  const result = await getProperty(id)
  console.log(result)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <PropertyDetails property={result.data} />
    </div>
  )
}
