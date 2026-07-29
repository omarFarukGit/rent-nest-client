import { Navbar } from "@/components/shared/Navbar"
import { getMe } from "@/services/getMe"
import { TApiResponse, TUser } from "@/types/UserType"

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user: TApiResponse<TUser> = await getMe()

  return (
    <div>
      <Navbar user={user.data} />
      {children}
    </div>
  )
}
