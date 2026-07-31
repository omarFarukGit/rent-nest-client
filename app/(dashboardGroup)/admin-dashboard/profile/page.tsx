// app/admin-dashboard/profile/page.tsx

import AdminProfile from "@/components/modules/dashboard/admin/AdminProfile"
import { getMe } from "@/services/getMe"

export default async function ProfilePage() {
  const user = await getMe()

  return <AdminProfile admin={user.data} />
}
