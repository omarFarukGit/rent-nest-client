import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
} from "lucide-react";

import { Button } from "@/components/ui/button";


type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
};


type Props = {
  property: Property;
};


export default function PropertyCard({
  property,
}: Props) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        bg-card
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>


      {/* Content */}
      <div className="p-5">

        <div className="flex items-center justify-between">

          <span
            className="
              rounded-full
              bg-primary/10
              px-3
              py-1
              text-xs
              font-medium
              text-primary
            "
          >
            {property.type}
          </span>


          <p className="font-semibold text-primary">
            ${property.price}/month
          </p>

        </div>


        <h3 className="mt-4 text-xl font-semibold">
          {property.title}
        </h3>


        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {property.location}
        </div>


        <div className="mt-4 flex gap-5 text-sm text-muted-foreground">

          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            {property.bedrooms} Beds
          </div>


          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            {property.bathrooms} Baths
          </div>

        </div>


        <Button
          asChild
          className="mt-6 w-full"
        >
          <Link href={`/properties/${property.id}`}>
            View Details
          </Link>
        </Button>

      </div>

    </div>
  );
}