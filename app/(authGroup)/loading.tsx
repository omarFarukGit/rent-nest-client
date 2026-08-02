import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>

        <p className="text-sm text-muted-foreground">Loading Rent Nest...</p>
      </div>
    </div>
  )
}
