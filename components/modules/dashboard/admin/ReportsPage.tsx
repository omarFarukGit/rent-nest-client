"use client";

import {
  Download,
  Users,
  Home,
  FileText,
  TrendingUp,
  DollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";


const reportStats = [
  {
    title: "Total Users",
    value: "2,540",
    growth: "+12%",
    icon: Users,
  },
  {
    title: "Total Properties",
    value: "1,250",
    growth: "+8%",
    icon: Home,
  },
  {
    title: "Rental Requests",
    value: "580",
    growth: "+15%",
    icon: FileText,
  },
  {
    title: "Revenue",
    value: "$45,500",
    growth: "+20%",
    icon: DollarSign,
  },
];


const monthlyData = [
  {
    month: "January",
    users: 320,
    properties: 150,
    requests: 90,
  },
  {
    month: "February",
    users: 450,
    properties: 200,
    requests: 120,
  },
  {
    month: "March",
    users: 600,
    properties: 280,
    requests: 170,
  },
  {
    month: "April",
    users: 750,
    properties: 350,
    requests: 220,
  },
];


export default function ReportsPage() {
  return (
    <div className="space-y-8">


      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Reports & Analytics
          </h1>

          <p className="mt-2 text-muted-foreground">
            Monitor platform performance and growth.
          </p>
        </div>


        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>

      </div>




      {/* Stats */}
      <div
        className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {reportStats.map((item) => {

          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-xl
                border
                bg-card
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-muted-foreground">
                    {item.title}
                  </p>


                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>


                </div>


                <div
                  className="
                    rounded-lg
                    bg-primary/10
                    p-3
                    text-primary
                  "
                >
                  <Icon className="h-6 w-6" />
                </div>


              </div>



              <div className="mt-4 flex items-center gap-2 text-sm text-green-600">

                <TrendingUp className="h-4 w-4" />

                {item.growth} from last month

              </div>


            </div>
          );

        })}

      </div>





      {/* Monthly Report Table */}
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          bg-card
        "
      >

        <div className="border-b p-6">

          <h2 className="text-xl font-semibold">
            Monthly Performance
          </h2>

        </div>



        <div className="overflow-x-auto">

          <table className="w-full">


            <thead className="bg-muted/50">

              <tr>

                <th className="p-4 text-left text-sm">
                  Month
                </th>

                <th className="p-4 text-left text-sm">
                  New Users
                </th>

                <th className="p-4 text-left text-sm">
                  Properties
                </th>

                <th className="p-4 text-left text-sm">
                  Requests
                </th>

              </tr>

            </thead>



            <tbody>

              {monthlyData.map((item) => (

                <tr
                  key={item.month}
                  className="border-b last:border-none"
                >

                  <td className="p-4 font-medium">
                    {item.month}
                  </td>


                  <td className="p-4">
                    {item.users}
                  </td>


                  <td className="p-4">
                    {item.properties}
                  </td>


                  <td className="p-4">
                    {item.requests}
                  </td>


                </tr>

              ))}


            </tbody>


          </table>

        </div>


      </div>





      {/* Growth Overview */}
      <div
        className="
          rounded-xl
          border
          bg-card
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <TrendingUp className="h-6 w-6 text-primary" />

          <h2 className="text-xl font-semibold">
            Growth Overview
          </h2>

        </div>


        <p className="mt-4 text-muted-foreground">
          RentNest platform performance is growing steadily.
          User registration and property listings are increasing
          every month.
        </p>


      </div>


    </div>
  );
}