"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


const LogingForm = () => {
  return (
    <form action={""} className="space-y-4">
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
        <Button type="submit">login</Button>
      </Card>
    </form>
  )
}

export default LogingForm
