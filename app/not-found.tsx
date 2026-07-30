import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building2 } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 px-6">
      <div className="max-w-xl text-center">
        <div className="mb-8 inline-flex rounded-full border bg-background p-6 shadow-sm">
          <Building2 className="h-12 w-12 text-primary" />
        </div>

        <p className="text-sm font-semibold tracking-[0.25em] text-primary uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Oops! This page isn&apos;t available.
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page may have been removed, renamed, or the URL might be
          incorrect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>

          <Button variant="secondary" size="lg" asChild>
            <Link href="/properties">View Properties</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
