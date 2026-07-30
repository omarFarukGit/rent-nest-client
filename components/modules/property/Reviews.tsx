"use client";

import Image from "next/image";
import {
  Bath,
  BedDouble,
  Calendar,
  CheckCircle,
  Home,
  MapPin,
  Ruler,
  Star,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";


type PropertyDetailsType = {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  amenities: string[];
  availability: string;

  category: {
    name: string;
  };

  landlord: {
    name: string;
    email: string;
    phone: string | null;
    address: string | null;
  };

  averageRating: number;
  reviewCount: number;

  reviews: {
    id: string;
    rating: number;
    comment: string;
    user: {
      name: string;
      email: string;
    };
  }[];
};



type Props = {
  property: PropertyDetailsType;
};



export default function PropertyDetails({
  property,
}: Props) {


  return (
    <div className="space-y-10">



      {/* Image Gallery */}

      <div className="
        grid
        gap-4
        md:grid-cols-2
      ">


        <div className="
          relative
          h-[400px]
          overflow-hidden
          rounded-xl
        ">

          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />

        </div>




        <div className="
          grid
          grid-cols-2
          gap-4
        ">

          {property.images.slice(1).map((image)=>(
            <div
              key={image}
              className="
                relative
                h-[190px]
                overflow-hidden
                rounded-xl
              "
            >

              <Image
                src={image}
                alt="property"
                fill
                className="object-cover"
              />

            </div>
          ))}

        </div>


      </div>









      {/* Main Info */}

      <div className="
        grid
        gap-8
        lg:grid-cols-3
      ">



        {/* Left */}

        <div className="
          space-y-6
          lg:col-span-2
        ">


          <div>

            <div className="
              flex
              items-center
              justify-between
            ">


              <h1 className="
                text-3xl
                font-bold
              ">
                {property.title}
              </h1>


              <span
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm

                  ${
                    property.availability === "AVAILABLE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }
                `}
              >

                {property.availability}

              </span>


            </div>





            <div className="
              mt-3
              flex
              items-center
              gap-2
              text-muted-foreground
            ">

              <MapPin className="h-5 w-5"/>

              {property.location}

            </div>



          </div>







          {/* Price */}

          <div>

            <p className="text-muted-foreground">
              Price
            </p>


            <h2 className="
              text-3xl
              font-bold
              text-primary
            ">
              ৳ {Number(property.price).toLocaleString()}
            </h2>


          </div>









          {/* Property Features */}

          <div className="
            grid
            grid-cols-2
            gap-4
            rounded-xl
            border
            p-5
            md:grid-cols-4
          ">


            <Feature
              icon={<BedDouble />}
              label="Bedrooms"
              value={property.bedrooms}
            />


            <Feature
              icon={<Bath />}
              label="Bathrooms"
              value={property.bathrooms}
            />


            <Feature
              icon={<Ruler />}
              label="Size"
              value={`${property.size} sqft`}
            />



            <Feature
              icon={<Home />}
              label="Category"
              value={property.category.name}
            />


          </div>









          {/* Description */}

          <div>

            <h2 className="text-xl font-semibold">
              Description
            </h2>


            <p className="
              mt-3
              leading-7
              text-muted-foreground
            ">
              {property.description}
            </p>


          </div>









          {/* Amenities */}

          <div>

            <h2 className="text-xl font-semibold">
              Amenities
            </h2>


            <div className="
              mt-4
              flex
              flex-wrap
              gap-3
            ">

              {
                property.amenities.map((item)=>(
                  <span
                    key={item}
                    className="
                      rounded-full
                      bg-muted
                      px-4
                      py-2
                      text-sm
                    "
                  >

                    {item}

                  </span>
                ))
              }


            </div>


          </div>





        </div>










        {/* Sidebar */}

        <div className="space-y-5">


          {/* Rating */}

          <div className="
            rounded-xl
            border
            p-6
          ">

            <div className="
              flex
              items-center
              gap-2
            ">

              <Star
                className="
                  fill-yellow-400
                  text-yellow-400
                "
              />

              <b>
                {property.averageRating}
              </b>

              ({property.reviewCount})

            </div>


          </div>








          {/* Landlord */}

          <div className="
            rounded-xl
            border
            p-6
          ">


            <h2 className="font-semibold">
              Landlord
            </h2>


            <div className="
              mt-4
              space-y-3
            ">


              <p className="
                flex
                gap-2
              ">

                <User className="h-4 w-4"/>

                {property.landlord.name}

              </p>


              <p className="text-sm">
                {property.landlord.email}
              </p>


            </div>


          </div>







          <Button
            className="w-full"
            size="lg"
          >

            Send Rental Request

          </Button>


        </div>



      </div>








      {/* Reviews */}

      <div>

        <h2 className="text-2xl font-bold">
          Reviews
        </h2>


        <div className="mt-5 space-y-4">

          {
            property.reviews.map((review)=>(
              <div
                key={review.id}
                className="
                  rounded-xl
                  border
                  p-5
                "
              >

                <div className="
                  flex
                  items-center
                  gap-2
                ">

                  <Star
                    className="
                    h-4
                    w-4
                    fill-yellow-400
                    text-yellow-400
                    "
                  />

                  {review.rating}

                </div>


                <p className="mt-3">
                  {review.comment}
                </p>


                <p className="
                  mt-2
                  text-sm
                  text-muted-foreground
                ">
                  {review.user.name}
                </p>


              </div>
            ))
          }


        </div>


      </div>



    </div>
  );
}







function Feature({
  icon,
  label,
  value,
}:{
  icon: React.ReactNode;
  label:string;
  value:string | number;
}){

  return (
    <div className="text-center">

      <div className="flex justify-center text-primary">
        {icon}
      </div>


      <p className="mt-2 text-sm text-muted-foreground">
        {label}
      </p>


      <p className="font-semibold">
        {value}
      </p>


    </div>
  );
}