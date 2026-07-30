import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from "react"

const ContactFrom = () => {
  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <Input placeholder="John Doe" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input type="email" placeholder="john@example.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Subject</label>
              <Input placeholder="Enter subject" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>

              <Textarea rows={6} placeholder="Write your message..." />
            </div>

            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactFrom
