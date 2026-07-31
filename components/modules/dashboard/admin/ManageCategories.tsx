/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Plus, Edit, Trash2, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useState, useTransition } from "react"
import CategoryModal from "@/app/(dashboardGroup)/_components/CategoryModal"
import { TCategoriesResponse } from "@/types/CategoryType"
import { deleteCategory } from "@/app/(dashboardGroup)/_actions/admin/manageCategoryActions"

type Props = {
  categories: TCategoriesResponse
}

export default function ManageCategories({ categories }: Props) {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<any>(null)
  const [isPending, startTransition] = useTransition()
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Categories</h1>

          <p className="mt-2 text-muted-foreground">
            Create and manage property categories.
          </p>
        </div>

        <Button
          onClick={() => {
            setSelectedCategory(null)
            setOpen(true)
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Category Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.data.map((category) => (
          <div
            key={category.id}
            className="rounded-xl border bg-card p-6 transition hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{category.name}</h3>

                {/* <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p> */}
              </div>

              {/* <span
                className={`rounded-full px-3 py-1 text-xs ${
                  category.status === "ACTIVE"
                    ? "bg-green-500/10 text-green-600"
                    : "bg-red-500/10 text-red-600"
                } `}
              >
                {category.status}
              </span> */}
            </div>

            {/* Property Count */}
            {/* <div className="mt-5 rounded-lg bg-muted p-3 text-sm">
              Total Properties:
              <span className="ml-2 font-semibold">{category.properties}</span>
            </div> */}

            {/* Actions */}
            <div className="mt-5 flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setSelectedCategory(category)
                  setOpen(true)
                }}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>

              <Button
                variant="destructive"
                size="icon"
                disabled={isPending}
                onClick={() => {
                  startTransition(async () => {
                    const result = await deleteCategory(category.id)

                    if (result.success) {
                      // toast.success(result.message)
                    } else {
                      // toast.error(result.message)
                    }
                  })
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>

              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <CategoryModal
        open={open}
        setOpen={setOpen}
        category={selectedCategory}
      />
    </div>
  )
}
