"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { registerAction } from "../_actions/registerAction"
import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const RegisterFrom = () => {
  const [state, action, pending] = useActionState(registerAction, false)
  const router = useRouter()

  useEffect(() => {
    if (!state) return
    if (state.success) {
      toast.success("user created successfylly plaese loin")
      setTimeout(() => {
        router.push("/login")
      }, 1000)
    }
    if (!state.success) {
      toast.error(state.message)
    }
  })
  return (
    <form action={action}>
      <Card className="space-y-4 p-5">
        <Input name="name" type="text" placeholder="Enter your Name" required />

        <Input
          name="email"
          type="email"
          placeholder="Enter your Email"
          required
        />

        <Input
          name="password"
          type="password"
          placeholder="Enter your Password"
          required
        />

        <select
          name="role"
          defaultValue=""
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="" disabled>
            Select your role
          </option>
          <option value="TENANT">Tenant</option>
          <option value="LANDLORD">Landlord</option>
        </select>

        <Button disabled={pending} type="submit" className="w-full">
          {pending ? "Registering..." : "Register"}
        </Button>
      </Card>
    </form>
  )
}

export default RegisterFrom
