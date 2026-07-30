import { Navbar } from "@/components/shared/Navbar"
import { getMe } from "@/services/getMe"

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const user=await getMe()
  return (
    <div className="min-h-screen bg-background">
      <Navbar  />

      <main className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
