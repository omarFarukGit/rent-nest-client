import {
  Search,
  Send,
  KeyRound,
  Home,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Search Property",
    description:
      "Browse thousands of houses, apartments, villas, and offices based on your needs.",
    icon: Search,
  },
  {
    step: "02",
    title: "Send Rental Request",
    description:
      "Contact landlords and send a rental request for your preferred property.",
    icon: Send,
  },
  {
    step: "03",
    title: "Get Approved",
    description:
      "Once the landlord approves your request, complete the rental process.",
    icon: KeyRound,
  },
  {
    step: "04",
    title: "Move Into Your Home",
    description:
      "Enjoy a secure and comfortable living experience with Rent Nest.",
    icon: Home,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            How It Works
          </h2>

          <p className="mt-3 text-muted-foreground">
            Finding your dream home is simple with Rent Nest.
          </p>
        </div>


        {/* Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="
                  relative
                  rounded-xl
                  border
                  bg-background
                  p-6
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* Step Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-5xl
                    font-bold
                    text-muted/30
                  "
                >
                  {item.step}
                </span>


                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>


                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>


                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}