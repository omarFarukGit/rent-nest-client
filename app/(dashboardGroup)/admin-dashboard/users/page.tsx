// app/admin-dashboard/users/page.tsx

import ManageUsers from "@/components/modules/dashboard/admin/ManageUsers"
import { getAllUsers } from "../../_actions/admin/manageUserAction"
import { IUsersResponse } from "@/types/UserType"

export default async function UsersPage() {
  const users: IUsersResponse = await getAllUsers()

  return <ManageUsers users={users.data} />
}
