"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Home,
  FileText,
  Edit,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";


export default function TenantProfile() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your personal information and account details.
        </p>
      </div>



      {/* Profile Card */}
      <div className="rounded-xl border bg-card p-6">

        <div className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
        ">


          {/* Avatar */}
          <div className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-primary/10
          ">

            <User className="h-12 w-12 text-primary"/>

          </div>




          {/* Information */}
          <div className="flex-1">

            <h2 className="text-2xl font-bold">
              Ahmed Rahman
            </h2>

            <p className="text-muted-foreground">
              Tenant
            </p>


            <div className="
              mt-5
              grid
              gap-4
              sm:grid-cols-2
            ">


              <div className="flex items-center gap-2">

                <Mail className="h-4 w-4 text-primary"/>

                ahmed@gmail.com

              </div>



              <div className="flex items-center gap-2">

                <Phone className="h-4 w-4 text-primary"/>

                +8801700000000

              </div>




              <div className="flex items-center gap-2">

                <MapPin className="h-4 w-4 text-primary"/>

                Dhaka, Bangladesh

              </div>




              <div className="flex items-center gap-2">

                <Calendar className="h-4 w-4 text-primary"/>

                Joined July 2026

              </div>



            </div>


          </div>






          {/* Buttons */}
          <div className="
            flex
            flex-col
            gap-3
          ">


            <Button>

              <Edit className="mr-2 h-4 w-4"/>

              Edit Profile

            </Button>




            <Button variant="outline">

              <Lock className="mr-2 h-4 w-4"/>

              Change Password

            </Button>


          </div>



        </div>

      </div>







      {/* Statistics */}
      <div className="
        grid
        gap-6
        md:grid-cols-3
      ">


        <div className="rounded-xl border bg-card p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                Active Rentals
              </p>


              <h2 className="mt-2 text-3xl font-bold">
                2
              </h2>


            </div>


            <Home className="h-10 w-10 text-primary"/>

          </div>

        </div>






        <div className="rounded-xl border bg-card p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                Rental Requests
              </p>


              <h2 className="mt-2 text-3xl font-bold">
                8
              </h2>


            </div>


            <FileText className="h-10 w-10 text-blue-600"/>

          </div>

        </div>






        <div className="rounded-xl border bg-card p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                Saved Properties
              </p>


              <h2 className="mt-2 text-3xl font-bold">
                15
              </h2>


            </div>


            <User className="h-10 w-10 text-green-600"/>

          </div>

        </div>



      </div>








      {/* About */}
      <div className="rounded-xl border bg-card p-6">

        <h2 className="text-xl font-semibold">
          About Me
        </h2>


        <p className="
          mt-4
          leading-7
          text-muted-foreground
        ">
          I am looking for a comfortable and safe place to live.
          I prefer well-maintained properties with good facilities
          and a peaceful environment.
        </p>


      </div>



    </div>
  );
}