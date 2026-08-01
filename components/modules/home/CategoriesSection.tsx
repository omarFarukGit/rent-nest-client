"use client"

import { TCategoriesResponse } from "@/types/CategoryType"
import {
  Home,
  Building2,
  Castle,
  BriefcaseBusiness,
  Trees,
  Tag,
} from "lucide-react"

import { useRouter, useSearchParams } from "next/navigation"

type Props = {
  categories: TCategoriesResponse
}

const categoryIcons = {
  HOUSE: Home,
  APARTMENT: Building2,
  VILLA: Castle,
  OFFICE: BriefcaseBusiness,
  LAND: Trees,
}

export default function CategoriesSection({ categories }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("category", category)

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Explore Property Categories
          </h2>

          <p className="mt-3 text-muted-foreground">
            Find the perfect property type that matches your lifestyle.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.data.slice(1, 6).map((category) => {
            const Icon =
              categoryIcons[
                category.name.toUpperCase() as keyof typeof categoryIcons
              ] || Tag

            return (
              <button
                key={category.id}
                onClick={() => handleCategory(category.name)}
                className="group rounded-xl border bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{category.name}</h3>

                {/* <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p> */}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
