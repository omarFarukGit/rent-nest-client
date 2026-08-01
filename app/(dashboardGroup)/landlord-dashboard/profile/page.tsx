// app/landlord-dashboard/profile/page.tsx

import LandlordProfile from "@/components/modules/dashboard/landlord/LandlordProfile";
import { getMe } from "@/services/getMe";

export default async function ProfilePage() {
  const user = await getMe()
  return <LandlordProfile user={user.data} />;
}