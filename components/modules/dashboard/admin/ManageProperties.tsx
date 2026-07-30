"use client";

import {
  Search,
  MoreHorizontal,
  Eye,
  Trash2,
  CheckCircle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const properties = [
  {
    id: 1,
    title: "Modern Family Apartment",
    owner: "Ahmed Rahman",
    location: "Dhanmondi, Dhaka",
    type: "APARTMENT",
    price: 25000,
    status: "AVAILABLE",
  },
  {
    id: 2,
    title: "Luxury Villa",
    owner: "Sarah Khan",
    location: "Uttara, Dhaka",
    type: "VILLA",
    price: 50000,
    status: "RENTED",
  },
  {
    id: 3,
    title: "Office Space",
    owner: "Hasan Ali",
    location: "Gulshan, Dhaka",
    type: "OFFICE",
    price: 70000,
    status: "PENDING",
  },
];


export default function ManageProperties() {
  return (
    <div className="space-y-6">


      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Manage Properties
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage all rental properties listed on RentNest.
        </p>
      </div>



      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <Search
            className="
              absolute
              left-3
              top-3
              h-5
              w-5
              text-muted-foreground
            "
          />

          <Input
            placeholder="Search properties..."
            className="pl-10"
          />

        </div>


        <Button variant="outline">
          Filter Status
        </Button>


        <Button variant="outline">
          Filter Type
        </Button>

      </div>




      {/* Property Table */}
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          bg-card
        "
      >

        <div className="overflow-x-auto">

          <table className="w-full">


            <thead
              className="
                border-b
                bg-muted/50
              "
            >

              <tr>

                <th className="p-4 text-left text-sm">
                  Property
                </th>

                <th className="p-4 text-left text-sm">
                  Owner
                </th>

                <th className="p-4 text-left text-sm">
                  Type
                </th>

                <th className="p-4 text-left text-sm">
                  Price
                </th>

                <th className="p-4 text-left text-sm">
                  Status
                </th>

                <th className="p-4 text-left text-sm">
                  Action
                </th>

              </tr>

            </thead>



            <tbody>

              {properties.map((property) => (

                <tr
                  key={property.id}
                  className="border-b last:border-none"
                >


                  {/* Property */}
                  <td className="p-4">

                    <div>

                      <h3 className="font-medium">
                        {property.title}
                      </h3>


                      <p className="text-sm text-muted-foreground">
                        {property.location}
                      </p>

                    </div>

                  </td>



                  {/* Owner */}
                  <td className="p-4 text-sm">
                    {property.owner}
                  </td>




                  {/* Type */}
                  <td className="p-4">

                    <span
                      className="
                        rounded-full
                        bg-primary/10
                        px-3
                        py-1
                        text-xs
                        text-primary
                      "
                    >
                      {property.type}
                    </span>

                  </td>




                  {/* Price */}
                  <td className="p-4 font-medium">
                    ${property.price}/month
                  </td>




                  {/* Status */}
                  <td className="p-4">

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        ${
                          property.status === "AVAILABLE"
                            ? "bg-green-500/10 text-green-600"
                            : property.status === "RENTED"
                            ? "bg-blue-500/10 text-blue-600"
                            : "bg-yellow-500/10 text-yellow-600"
                        }
                      `}
                    >

                      {property.status}

                    </span>

                  </td>




                  {/* Action */}
                  <td className="p-4">

                    <div className="flex gap-2">


                      <Button
                        size="icon"
                        variant="outline"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>



                      <Button
                        size="icon"
                        variant="outline"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>



                      <Button
                        size="icon"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>



                      <Button
                        size="icon"
                        variant="ghost"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>


                    </div>

                  </td>



                </tr>

              ))}


            </tbody>


          </table>


        </div>


      </div>


    </div>
  );
}