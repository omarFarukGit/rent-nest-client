import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              Rent Nest
            </Link>

            <p className="mt-4 text-sm text-muted-foreground">
              Find your perfect home with Rent Nest. We connect tenants and
              landlords with a simple and secure rental experience.
            </p>

            <div className="mt-5 flex gap-3">
              <Link
                href="#"
                className="rounded-full border p-2 hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-full border p-2 hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-full border p-2 hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="rounded-full border p-2 hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/properties" className="hover:text-primary">
                  Properties
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">Services</h3>

            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Property Search</li>
              <li>Rental Management</li>
              <li>Tenant Support</li>
              <li>Landlord Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact Us</h3>

            <div className="mt-4 space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@rentnest.com</span>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rent Nest. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
