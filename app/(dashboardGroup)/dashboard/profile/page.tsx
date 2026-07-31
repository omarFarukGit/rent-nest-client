// app/dashboard/profile/page.tsx

import TenantProfile from "@/components/modules/dashboard/tenant/TenantProfile"
import { getMe } from "@/services/getMe"

export default async function ProfilePage() {
  const user = await getMe()
  return <TenantProfile user={user.data} />
}
