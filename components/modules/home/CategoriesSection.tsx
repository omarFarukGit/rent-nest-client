import Link from "next/link";
import {
  Home,
  Building2,
  Castle,
  BriefcaseBusiness,
  Trees,
} from "lucide-react";

const categories = [
  {
    title: "House",
    description: "Find comfortable family houses",
    icon: Home,
    href: "/properties?category=HOUSE",
  },
  {
    title: "Apartment",
    description: "Modern apartments in prime locations",
    icon: Building2,
    href: "/properties?category=APARTMENT",
  },
  {
    title: "Villa",
    description: "Luxury villas for premium living",
    icon: Castle,
    href: "/properties?category=VILLA",
  },
  {
    title: "Office",
    description: "Professional workspace solutions",
    icon: BriefcaseBusiness,
    href: "/properties?category=OFFICE",
  },
  {
    title: "Land",
    description: "Buy or rent available lands",
    icon: Trees,
    href: "/properties?category=LAND",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Explore Property Categories
          </h2>

          <p className="mt-3 text-muted-foreground">
            Find the perfect property type that matches your lifestyle.
          </p>
        </div>


        {/* Categories */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className="
                  group
                  rounded-xl
                  border
                  bg-card
                  p-6
                  text-center
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-primary/10
                    text-primary
                    transition
                    group-hover:bg-primary
                    group-hover:text-primary-foreground
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>


                <h3 className="mt-5 text-lg font-semibold">
                  {category.title}
                </h3>


                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}