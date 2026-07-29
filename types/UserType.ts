export type TApiResponse<T> = {
  success: boolean
  message: string
  data: T
}

export type TUser = {
  id: string
  name: string
  email: string
  profileImage: string | null
  role: "TENANT" | "LANDLORD" | "ADMIN"
  status: "ACTIVE" | "INACTIVE" | "BLOCKED"
  phone: string | null
  avatar: string | null
  address: string | null
  createdAt: string
  updatedAt: string
}
