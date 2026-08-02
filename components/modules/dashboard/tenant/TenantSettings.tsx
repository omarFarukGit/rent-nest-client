"use client"

import { Bell, Lock, User, Shield, Trash2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function TenantSettings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account preferences and security settings.
        </p>
      </div>

      {/* Profile Settings */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <User className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">Account Information</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Full Name</label>

            <Input defaultValue="Ahmed Rahman" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <Input defaultValue="ahmed@gmail.com" type="email" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <Input defaultValue="+8801700000000" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Location</label>

            <Input defaultValue="Dhaka, Bangladesh" />
          </div>
        </div>
      </section>

      {/* Notification */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <Bell className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Rental Request Updates</h3>

              <p className="text-sm text-muted-foreground">
                Get notified when landlord responds.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Payment Reminder</h3>

              <p className="text-sm text-muted-foreground">
                Receive rent payment reminders.
              </p>
            </div>

            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Notifications</h3>

              <p className="text-sm text-muted-foreground">
                Receive updates via email.
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

          <h2 className="text-xl font-semibold">Security</h2>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Current Password
            </label>

            <Input type="password" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                New Password
              </label>

              <Input type="password" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Confirm Password
              </label>

              <Input type="password" />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="rounded-xl border bg-card p-6">
        <div className="mb-6 flex items-center gap-3">
          <Shield className="h-5 w-5 text-primary" />

          <h2 className="text-xl font-semibold">Privacy</h2>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Show Profile To Landlords</h3>

            <p className="text-sm text-muted-foreground">
              Allow landlords to view your profile.
            </p>
          </div>

          <Switch defaultChecked />
        </div>
      </section>

      {/* Danger Zone */}
      <section className="rounded-xl border border-destructive/30 bg-card p-6">
        <div className="flex items-center gap-3">
          <Trash2 className="h-5 w-5 text-destructive" />

          <h2 className="text-xl font-semibold">Danger Zone</h2>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Permanently delete your account and all data.
        </p>

        <Button variant="destructive" className="mt-5">
          Delete Account
        </Button>
      </section>

      {/* Save */}
      <div className="flex justify-end">
        <Button size="lg">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
