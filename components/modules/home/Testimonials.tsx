import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Rahman",
    role: "Tenant",
    image: "/images/user-1.jpg",
    review:
      "RentNest helped me find my apartment quickly. The search process was simple and the rental experience was smooth.",
  },
  {
    name: "Sarah Khan",
    role: "Landlord",
    image: "/images/user-2.jpg",
    review:
      "Managing my properties became much easier with RentNest. I can easily connect with potential tenants.",
  },
  {
    name: "Mohammad Hasan",
    role: "Tenant",
    image: "/images/user-3.jpg",
    review:
      "I found my dream home within a few days. The platform is reliable and very easy to use.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Our Users Say</h2>

          <p className="mt-4 text-muted-foreground">
            Hear from tenants and landlords who use RentNest.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {item.review}
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>

                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
