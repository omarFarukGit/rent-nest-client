"use client";

import { Search, Star, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const reviews = [
  {
    id: 1,
    tenant: "Ahmed Rahman",
    property: "Modern Family Apartment",
    rating: 5,
    date: "30 Jul 2026",
    comment:
      "Excellent apartment. Very clean, secure, and the landlord was always helpful.",
  },
  {
    id: 2,
    tenant: "Sarah Khan",
    property: "Luxury Villa",
    rating: 4,
    date: "25 Jul 2026",
    comment:
      "Beautiful property with great facilities. Overall a very good experience.",
  },
  {
    id: 3,
    tenant: "Hasan Ali",
    property: "Office Space",
    rating: 3,
    date: "18 Jul 2026",
    comment:
      "Location is good, but maintenance could be improved.",
  },
];

export default function LandlordReviews() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Reviews
        </h1>

        <p className="mt-2 text-muted-foreground">
          Read feedback from your tenants.
        </p>
      </div>

      {/* Summary */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Average Rating
          </p>

          <div className="mt-2 flex items-center gap-2">
            <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            <h2 className="text-3xl font-bold">
              4.7
            </h2>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Total Reviews
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            126
          </h2>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Response Rate
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            98%
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search reviews..."
            className="pl-10"
          />
        </div>

        <Button variant="outline">
          Filter Rating
        </Button>
      </div>

      {/* Reviews */}
      <div className="space-y-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border bg-card p-6"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-lg font-semibold">
                  {review.tenant}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {review.property}
                </p>

                <div className="mt-3 flex items-center gap-1">
                  {Array.from({
                    length: review.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="mt-4 text-muted-foreground">
                  {review.comment}
                </p>
              </div>

              <div className="flex flex-col items-end justify-between">
                <span className="text-sm text-muted-foreground">
                  {review.date}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length === 0 && (
        <div className="rounded-xl border bg-card py-16 text-center">
          <MessageSquare className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

          <h3 className="text-xl font-semibold">
            No Reviews Yet
          </h3>

          <p className="mt-2 text-muted-foreground">
            Tenant reviews will appear here after they submit feedback.
          </p>
        </div>
      )}
    </div>
  );
}