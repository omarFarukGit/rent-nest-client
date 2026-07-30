"use client";

import {
  Plus,
  Edit,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";


const categories = [
  {
    id: 1,
    name: "Apartment",
    description: "Modern apartment properties",
    properties: 245,
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "House",
    description: "Family houses for rent",
    properties: 180,
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Villa",
    description: "Luxury villa properties",
    properties: 75,
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Office",
    description: "Commercial office spaces",
    properties: 60,
    status: "ACTIVE",
  },
  {
    id: 5,
    name: "Land",
    description: "Available lands for rent",
    properties: 40,
    status: "INACTIVE",
  },
];


export default function ManageCategories() {
  return (
    <div className="space-y-6">


      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Manage Categories
          </h1>

          <p className="mt-2 text-muted-foreground">
            Create and manage property categories.
          </p>
        </div>


        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>

      </div>




      {/* Category Cards */}
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        {categories.map((category) => (

          <div
            key={category.id}
            className="
              rounded-xl
              border
              bg-card
              p-6
              transition
              hover:shadow-md
            "
          >

            <div className="flex items-start justify-between">


              <div>

                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>


                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>

              </div>


              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  ${
                    category.status === "ACTIVE"
                      ? "bg-green-500/10 text-green-600"
                      : "bg-red-500/10 text-red-600"
                  }
                `}
              >
                {category.status}
              </span>


            </div>



            {/* Property Count */}
            <div
              className="
                mt-5
                rounded-lg
                bg-muted
                p-3
                text-sm
              "
            >
              Total Properties:
              <span className="ml-2 font-semibold">
                {category.properties}
              </span>
            </div>




            {/* Actions */}
            <div className="mt-5 flex gap-2">


              <Button
                variant="outline"
                className="flex-1"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>


              <Button
                variant="destructive"
                size="icon"
              >
                <Trash2 className="h-4 w-4" />
              </Button>


              <Button
                variant="ghost"
                size="icon"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>


            </div>


          </div>

        ))}


      </div>


    </div>
  );
}