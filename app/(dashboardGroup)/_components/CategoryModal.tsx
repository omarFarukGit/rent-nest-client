"use client"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useFormStatus } from "react-dom"
import {
  createCategory,
  updateCategory,
} from "../_actions/admin/manageCategoryActions"

type Category = {
  id: string
  name: string
  description: string
  status: "ACTIVE" | "INACTIVE"
}

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  category?: Category | null
}

function SubmitButton({ isEdit }: { isEdit: boolean }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : isEdit ? "Update" : "Create"}
    </Button>
  )
}

export default function CategoryModal({ open, setOpen, category }: Props) {
  const action = async (formData: FormData) => {
    const result = category
      ? await updateCategory(category.id, formData)
      : await createCategory(formData)

    if (result?.success) {
      setOpen(false)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {category ? "Update Category" : "Add Category"}
          </DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Category Name</Label>

            <Input
              id="name"
              name="name"
              placeholder="Apartment"
              defaultValue={category?.name ?? ""}
              required
            />
          </div>

          {/* <div className="space-y-2">
            <Label htmlFor="description">
              Description
            </Label>

            <Input
              id="description"
              name="description"
              placeholder="Category description"
              defaultValue={category?.description ?? ""}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>

            <select
              id="status"
              name="status"
              defaultValue={category?.status ?? "ACTIVE"}
              className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="ACTIVE">
                ACTIVE
              </option>

              <option value="INACTIVE">
                INACTIVE
              </option>
            </select>
          </div> */}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <SubmitButton isEdit={!!category} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
