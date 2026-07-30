import {
  ShieldCheck,
  Search,
  Users,
  Clock,
  MessageCircle,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Find trusted rental properties with verified information and transparent details.",
  },
  {
    icon: Search,
    title: "Easy Property Search",
    description:
      "Search houses, apartments, villas, and offices with smart filters.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description:
      "Connect with reliable tenants and landlords through RentNest.",
  },
  {
    icon: Clock,
    title: "Save Your Time",
    description:
      "Find your ideal home faster without wasting time on manual searching.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Communicate easily with landlords and manage rental requests.",
  },
  {
    icon: BadgeCheck,
    title: "Secure Rental Process",
    description:
      "Enjoy a simple, safe, and organized rental experience.",
  },
];

export default function WhyRentNest() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Choose RentNest?
          </h2>

          <p className="mt-4 text-muted-foreground">
            We make renting easier, safer, and smarter for
            tenants and landlords.
          </p>
        </div>


        {/* Features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-xl
                  border
                  bg-card
                  p-6
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary/10
                    text-primary
                    transition
                    group-hover:bg-primary
                    group-hover:text-primary-foreground
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>


                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>


                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}