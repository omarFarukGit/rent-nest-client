import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  ArrowRight,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-primary
            px-6
            py-14
            text-center
            text-primary-foreground
            md:px-12
          "
        >

          {/* Background Decoration */}
          <div
            className="
              absolute
              -right-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-white/10
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-60
              w-60
              rounded-full
              bg-white/10
            "
          />


          {/* Content */}
          <div className="relative mx-auto max-w-3xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <Home className="h-7 w-7" />
            </div>


            <h2 className="mt-6 text-3xl font-bold md:text-5xl">
              Ready to Find Your Next Home?
            </h2>


            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Join thousands of tenants and landlords using
              RentNest for a simple, secure, and smarter
              rental experience.
            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <Link href="/properties">
                  Explore Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>


              <Button
                size="lg"
                variant="outline"
                className="
                  border-white
                  bg-transparent
                  text-white
                  hover:bg-white
                  hover:text-primary
                "
                asChild
              >
                <Link href="/dashboard/property/create">
                  List Your Property
                </Link>
              </Button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}