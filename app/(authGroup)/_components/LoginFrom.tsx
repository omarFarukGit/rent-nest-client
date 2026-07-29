"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { loginAction } from "../_actions/loginAction"
import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import jwt, { JwtPayload } from "jsonwebtoken"

const LogingForm = () => {
  const [state, action, pending] = useActionState(loginAction, false)
  const router = useRouter()

  useEffect(() => {
    if (!state) return

    if (state.success) {
      toast.success(state.message)
      const decodedToken = jwt.decode(state.data.accessToken) as JwtPayload
      if (decodedToken.role === "TENANT") {
        router.push("/dashboard")
      } else if (decodedToken.role === "LANDLORD") {
        router.push("/landloard-dashboard")
      } else if (decodedToken.role === "ADMIN") {
        router.push("/admin-dashboard")
      }
    }
    if (!state.success) {
      toast.error(state.message)
    }
  }, [state, router])
  return (
    <form action={action} className="space-y-4">
      <Card className="space-y-4 p-5">
        <Input
          name="email"
          type="email"
          placeholder="Enter your Email"
          required
        ></Input>
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        ></Input>
        <Button disabled={pending} type="submit">
          {pending ? "submiting" : "login"}
        </Button>
      </Card>
    </form>
  )
}

export default LogingForm
