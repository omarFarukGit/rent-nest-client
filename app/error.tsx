"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, RefreshCcw, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("RentNest Error:", error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-lg">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">
          Something Went Wrong!
        </h1>

        <p className="mt-3 text-sm text-gray-600">
          We couldn’t complete your request. 
          Please try again or return to RentNest home.
        </p>


        {/* Error message development */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-5 rounded-lg bg-gray-100 p-3 text-left text-xs text-gray-700">
            {error.message}
          </div>
        )}


        {/* Actions */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <Button
            onClick={() => reset()}
            className="gap-2"
          >
            <RefreshCcw size={18} />
            Try Again
          </Button>


          <Button
            variant="outline"
            className="gap-2"
            asChild
          >
            <Link href="/">
              <Home size={18} />
              Go Home
            </Link>
          </Button>

        </div>


        {/* Brand */}
        <p className="mt-8 text-xs text-gray-400">
          RentNest 🏠 — Find your perfect place
        </p>

      </div>
    </div>
  )
}