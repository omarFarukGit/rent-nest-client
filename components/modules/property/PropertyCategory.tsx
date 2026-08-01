"use client"

import { Button } from "@/components/ui/button"
import { TCategoriesResponse } from "@/types/CategoryType"

import { useRouter, useSearchParams } from "next/navigation"

// const categories = ["All", "Apartment", "House", "Villa", "Office", "Land"]

type Props = {
  categories: TCategoriesResponse
}

export default function PropertyCategory({ categories }: Props) {
  const router = useRouter()

  const searchParams = useSearchParams()

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams)

    if (category === "All") {
      params.delete("category")
    } else {
      params.set("category", category)
    }

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {categories.data.map((item) => (
        <Button
          key={item.id}

          variant={
            (item.name === "All" && !searchParams.get("category")) ||
            searchParams.get("category") === item.name
              ? "default"
              : "outline"
          }

          size="sm"

          onClick={() => handleCategory(item.name)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  )
}
