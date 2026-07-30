import { getAllProperties } from "@/app/(publicGroup)/_actions/popertyActions"

import { TPropertiesResponse } from "@/types/PropertyType"
import PropertyCard from "../property/PropertyCard"

export default async function FeaturedProperties() {
  const properties: TPropertiesResponse = await getAllProperties()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Properties
            </h2>

            <p className="mt-3 text-muted-foreground">
              Explore our hand-picked rental properties.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.data.slice(3, 7).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}
