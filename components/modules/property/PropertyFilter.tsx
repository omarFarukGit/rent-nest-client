"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PropertyFilter() {
  const router = useRouter()

  const searchParams = useSearchParams()

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "")

  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "")

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Min Price

    if (minPrice) {
      params.set("minPrice", minPrice)
    } else {
      params.delete("minPrice")
    }

    // Max Price

    if (maxPrice) {
      params.set("maxPrice", maxPrice)
    } else {
      params.delete("maxPrice")
    }

    router.push(`/properties?${params.toString()}`)
  }

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams.toString())

    params.delete("minPrice")
    params.delete("maxPrice")
    params.delete("search")
    params.delete("category")

    setMinPrice("")
    setMaxPrice("")

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          type="number"

          placeholder="Minimum Price"

          value={minPrice}

          onChange={(e) => setMinPrice(e.target.value)}
        />

        <Input
          type="number"

          placeholder="Maximum Price"

          value={maxPrice}

          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="flex gap-3">
        <Button onClick={applyFilter}>Apply Filter</Button>

        <Button variant="outline" onClick={clearFilter}>
          Clear
        </Button>
      </div>
    </div>
  )
}
