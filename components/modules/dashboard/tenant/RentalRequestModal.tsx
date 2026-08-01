"use client"

import { useActionState, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { createRentalRequest } from "@/app/(dashboardGroup)/_actions/tenant/manageRentalActions"

type Props = {
  propertyId: string
  propertyTitle: string
  propertyLocation: string
  propertyPrice: string
  disabled?: boolean
}

const initialState = {
  success: false,
  message: "",
}

export default function RentalRequestModal({
  propertyId,
  propertyTitle,
  propertyLocation,
  propertyPrice,
  disabled,
}: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const [state, formAction, isPending] = useActionState(
    createRentalRequest,
    initialState
  )

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success(state.message)
      setOpen(false)
      router.refresh()
    } else {
      toast.error(state.message)
    }
  }, [state, router])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" size="lg" disabled={disabled}>
          Send Rental Request
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Rental Request</DialogTitle>
        </DialogHeader>

        <div className="rounded-lg border bg-muted/40 p-4">
          <h3 className="font-semibold">{propertyTitle}</h3>

          <p className="text-sm text-muted-foreground">{propertyLocation}</p>

          <p className="mt-2 font-semibold">
            ৳ {Number(propertyPrice).toLocaleString()} / month
          </p>
        </div>

        <form action={formAction} className="space-y-4">
          <input type="hidden" name="propertyId" value={propertyId} />

          <div className="space-y-2">
            <Label>Start Date</Label>

            <Input type="date" name="startDate" required />
          </div>

          <div className="space-y-2">
            <Label>End Date</Label>

            <Input type="date" name="endDate" required />
          </div>

          <div className="space-y-2">
            <Label>Message</Label>

            <Textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
