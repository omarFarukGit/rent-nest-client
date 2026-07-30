import Link from "next/link";
import {
  Search,
  Heart,
  Send,
  Home,
  PlusCircle,
  Users,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const tenantFeatures = [
  {
    icon: Search,
    title: "Find Your Home",
    description:
      "Search thousands of properties with advanced filters.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Save your favorite properties and compare easily.",
  },
  {
    icon: Send,
    title: "Send Rental Request",
    description:
      "Connect with landlords and request your preferred home.",
  },
];


const landlordFeatures = [
  {
    icon: PlusCircle,
    title: "List Your Property",
    description:
      "Create property listings and reach more tenants.",
  },
  {
    icon: Users,
    title: "Manage Tenants",
    description:
      "Handle rental requests and connect with tenants.",
  },
  {
    icon: BarChart3,
    title: "Track Properties",
    description:
      "Manage property status and rental activities easily.",
  },
];


export default function TenantLandlordSection() {
  return (
    <section className="bg-muted/40 py-16">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Built For Everyone
          </h2>

          <p className="mt-4 text-muted-foreground">
            Whether you are looking for a home or renting out
            your property, RentNest makes everything simple.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">


          {/* Tenant Card */}
          <div
            className="
              rounded-2xl
              border
              bg-background
              p-8
              shadow-sm
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <Home className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  For Tenants
                </h3>

                <p className="text-muted-foreground">
                  Find a place you can call home.
                </p>
              </div>
            </div>


            <div className="mt-8 space-y-5">
              {tenantFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>


            <Button asChild className="mt-8 w-full">
              <Link href="/properties">
                Find a Home
              </Link>
            </Button>

          </div>



          {/* Landlord Card */}
          <div
            className="
              rounded-2xl
              border
              bg-background
              p-8
              shadow-sm
            "
          >

            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <Home className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  For Landlords
                </h3>

                <p className="text-muted-foreground">
                  Rent your property with confidence.
                </p>
              </div>
            </div>


            <div className="mt-8 space-y-5">
              {landlordFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="rounded-md bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>


            <Button asChild className="mt-8 w-full">
              <Link href="/dashboard/property/create">
                Add Your Property
              </Link>
            </Button>

          </div>


        </div>

      </div>
    </section>
  );
}