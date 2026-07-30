import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Find Your Perfect Home With{" "}
          <span className="text-primary">
            Rent Nest
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Rent Nest is a modern rental platform connecting tenants
          with trusted landlords. We make finding, renting, and
          managing properties simple and secure.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/properties">
              Explore Properties
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}