"use client";

import {
  User,
  Bell,
  Shield,
  Globe,
  Save,
  Lock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";


export default function AdminSettings() {
  return (
    <div className="space-y-8">


      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your admin account and platform settings.
        </p>
      </div>



      {/* Profile Settings */}
      <section
        className="
          rounded-xl
          border
          bg-card
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <User className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Profile Settings
          </h2>

        </div>



        <div className="mt-6 grid gap-5 md:grid-cols-2">


          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>

            <Input
              className="mt-2"
              defaultValue="Admin User"
            />
          </div>



          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <Input
              className="mt-2"
              defaultValue="admin@rentnest.com"
            />
          </div>



          <div>
            <label className="text-sm font-medium">
              Phone
            </label>

            <Input
              className="mt-2"
              defaultValue="+8801700000000"
            />
          </div>


        </div>


      </section>





      {/* Notification Settings */}
      <section
        className="
          rounded-xl
          border
          bg-card
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <Bell className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Notifications
          </h2>

        </div>



        <div className="mt-6 space-y-5">


          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-medium">
                Email Notifications
              </h3>

              <p className="text-sm text-muted-foreground">
                Receive important updates by email.
              </p>
            </div>


            <Switch defaultChecked />

          </div>




          <div className="flex items-center justify-between">

            <div>
              <h3 className="font-medium">
                New Rental Requests
              </h3>

              <p className="text-sm text-muted-foreground">
                Get notified about new requests.
              </p>
            </div>


            <Switch defaultChecked />

          </div>



        </div>


      </section>






      {/* Security Settings */}
      <section
        className="
          rounded-xl
          border
          bg-card
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <Shield className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Security
          </h2>

        </div>



        <div className="mt-6 grid gap-5 md:grid-cols-2">


          <div>

            <label className="text-sm font-medium">
              Current Password
            </label>


            <div className="relative mt-2">

              <Lock
                className="
                  absolute
                  left-3
                  top-3
                  h-4
                  w-4
                  text-muted-foreground
                "
              />

              <Input
                type="password"
                className="pl-10"
              />

            </div>

          </div>



          <div>

            <label className="text-sm font-medium">
              New Password
            </label>


            <Input
              type="password"
              className="mt-2"
            />

          </div>


        </div>


      </section>






      {/* Platform Settings */}
      <section
        className="
          rounded-xl
          border
          bg-card
          p-6
        "
      >

        <div className="flex items-center gap-3">

          <Globe className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Platform Settings
          </h2>

        </div>



        <div className="mt-6 flex items-center justify-between">


          <div>

            <h3 className="font-medium">
              Maintenance Mode
            </h3>

            <p className="text-sm text-muted-foreground">
              Temporarily disable user access.
            </p>

          </div>


          <Switch />

        </div>


      </section>






      {/* Save Button */}
      <div className="flex justify-end">

        <Button size="lg">

          <Save className="mr-2 h-4 w-4" />

          Save Changes

        </Button>

      </div>



    </div>
  );
}