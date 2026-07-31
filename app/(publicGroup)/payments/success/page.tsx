import { CheckCircle, Home, Receipt } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: {
    session_id?: string
  }
}) {
  const sessionId = searchParams.session_id

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-sm">
        {/* Icon */}
        <div className="flex justify-center">
          <CheckCircle className="h-20 w-20 text-green-600" />
        </div>

        <h1 className="mt-6 text-3xl font-bold">Payment Successful 🎉</h1>

        <p className="mt-3 text-muted-foreground">
          Your payment has been completed successfully. Your rental request is
          now confirmed.
        </p>

        {/* Session ID */}

        {sessionId && (
          <div className="mt-6 rounded-lg bg-muted p-3 text-left">
            <p className="text-sm text-muted-foreground">Transaction ID</p>

            <p className="mt-1 text-xs font-medium break-all">{sessionId}</p>
          </div>
        )}

        {/* Actions */}

        <div className="mt-6 flex flex-col gap-3">
          <Button asChild>
            <Link href="/dashboard/my-rentals">
              <Home className="mr-2 h-4 w-4" />
              Go To My Rentals
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/dashboard/payments">
              <Receipt className="mr-2 h-4 w-4" />
              View Payment History
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
