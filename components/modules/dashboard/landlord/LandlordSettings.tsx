"use client";

import { Bell, Lock, Save, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function LandlordSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Personal Information */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <User className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Personal Information
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <Input defaultValue="John Doe" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <Input
              type="email"
              defaultValue="john@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <Input defaultValue="+8801700000000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Address
            </label>

            <Input defaultValue="Dhaka, Bangladesh" />
          </div>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <Bell className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Notifications
          </h2>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Rental Request Notifications
              </h3>

              <p className="text-sm text-muted-foreground">
                Receive notifications when a tenant submits a rental request.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Email Notifications
              </h3>

              <p className="text-sm text-muted-foreground">
                Receive important updates via email.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Marketing Emails
              </h3>

              <p className="text-sm text-muted-foreground">
                Receive news and promotional emails.
              </p>
            </div>

            <Switch />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <Lock className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">
            Security
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Current Password
            </label>

            <Input type="password" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              New Password
            </label>

            <Input type="password" />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Confirm New Password
            </label>

            <Input type="password" />
          </div>
        </div>
      </section>

      {/* Account Preferences */}
      <section className="rounded-xl border bg-card p-6">
        <h2 className="mb-6 text-xl font-semibold">
          Account Preferences
        </h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Public Profile
              </h3>

              <p className="text-sm text-muted-foreground">
                Allow tenants to view your public profile.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">
                Show Contact Information
              </h3>

              <p className="text-sm text-muted-foreground">
                Display your phone number on property listings.
              </p>
            </div>

            <Switch />
          </div>
        </div>
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <Button size="lg">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}