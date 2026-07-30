import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ContactFrom from "../_components/ContactFrom"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero */}
      <section className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>

        <p className="mt-4 text-muted-foreground">
          Have questions about Rent Nest? We would love to hear from you. Send us a
          message and our team will get back to you as soon as possible.
        </p>
      </section>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Mail className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">support@rentnest.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Phone className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+880 1700-000000</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <MapPin className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Office</h3>
                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Clock className="mt-1 h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-muted-foreground">Sunday - Thursday</p>
                <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <ContactFrom />
      </div>
    </main>
  )
}
