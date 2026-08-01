"use client"

import PropertyCard from "./PropertyCard"

import { TPropertiesResponse } from "@/types/PropertyType"

import PropertyFilter from "./PropertyFilter"
import PropertyCategory from "./PropertyCategory"
import { TCategoriesResponse } from "@/types/CategoryType"
import { PropertySearch } from "./PropertySearch"
import Pagination from "@/components/shared/Pagination"

type Props = {
  properties: TPropertiesResponse
  categories: TCategoriesResponse
}

export default function PropertyPage({ properties, categories }: Props) {
  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Explore Properties</h1>

        <p className="mt-2 text-muted-foreground">
          Find your perfect home from our available properties.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-between gap-2 sm:grid-cols-3">
        {/* Category */}
        <PropertyCategory categories={categories} />
        {/* Search */}
        <div></div>
        <PropertySearch />
      </div>
      {/* Filter */}

      <PropertyFilter />
      {/* Count */}

      <h2 className="text-xl font-semibold">
        Available Properties
        <span className="ml-2 text-muted-foreground">
          ({properties.data.length})
        </span>
      </h2>

      {/* Grid */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {properties.data.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {properties.data.length === 0 && (
        <div className="rounded-xl border p-10 text-center">
          <h3 className="text-xl font-semibold">No Property Found</h3>

          <p className="mt-2 text-muted-foreground">
            Try changing your search filters.
          </p>
        </div>
      )}

      <Pagination
        page={properties.meta.page}
        totalPages={properties.meta.totalPages}
      />
    </div>
  )
}
