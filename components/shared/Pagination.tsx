"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

type Props = {
  page: number
  totalPages: number
}

export default function Pagination({ page, totalPages }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("page", newPage.toString())

    router.push(`?${params.toString()}`)
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {/* Previous */}
      <Button
        variant="outline"
        size="icon"
        disabled={page === 1}
        onClick={() => changePage(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Numbers */}
      {pages.map((item) => (
        <Button
          key={item}
          variant={page === item ? "default" : "outline"}
          onClick={() => changePage(item)}
        >
          {item}
        </Button>
      ))}

      {/* Next */}
      <Button
        variant="outline"
        size="icon"
        disabled={page === totalPages}
        onClick={() => changePage(page + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
