import { Skeleton } from "@/components/ui/skeleton"

export default function PropertiesSkeleton() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 py-10">
      {/* Page Header */}
      <div className="space-y-3">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-24 rounded-full" />
        ))}
      </div>

      {/* Filters */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-11 rounded-md lg:col-span-1" />
        <Skeleton className="h-11 rounded-md lg:col-span-1" />
        <Skeleton className="h-11 rounded-md lg:col-span-1" />
      </div>

      <div className="flex gap-3">
        <Skeleton className="h-10 w-32 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-5 w-16" />
      </div>

      {/* Property Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border bg-background"
          >
            {/* Image */}
            <Skeleton className="h-60 w-full" />

            <div className="space-y-4 p-5">
              {/* Badge */}
              <div className="flex justify-between">
                <Skeleton className="h-7 w-24 rounded-full" />
                <Skeleton className="h-7 w-28 rounded-full" />
              </div>

              {/* Title */}
              <Skeleton className="h-6 w-3/4" />

              {/* Location */}
              <Skeleton className="h-4 w-2/3" />

              {/* Features */}
              <div className="flex gap-3">
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-14" />
                <Skeleton className="h-4 w-14" />
              </div>

              {/* Price */}
              <Skeleton className="h-8 w-32" />

              {/* Button */}
              <Skeleton className="h-11 w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
