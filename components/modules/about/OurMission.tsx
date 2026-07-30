import { ShieldCheck, Home, Users } from "lucide-react";

const items = [
  {
    icon: Home,
    title: "Easy Property Search",
    description:
      "Discover houses, apartments, villas, and offices easily.",
  },
  {
    icon: Users,
    title: "Trusted Community",
    description:
      "Connect with verified tenants and landlords.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Renting",
    description:
      "A safe and transparent rental experience.",
  },
];

export default function OurMission() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              rounded-xl
              border
              bg-card
              p-6
              transition
              hover:shadow-lg
            "
          >
            <item.icon className="h-10 w-10 text-primary" />

            <h3 className="mt-5 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}