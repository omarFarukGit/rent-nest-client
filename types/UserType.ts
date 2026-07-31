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

export interface IUserStats {
  totalProperties: number
  totalReviews: number
  totalLandlordRequests: number
  totalTenantRequests: number
  totalRequests: number
}
export interface IUser {
  id: string
  name: string
  email: string
  phone: string | null
  role: "ADMIN" | "LANDLORD" | "TENANT"
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED"
  address: string | null
  profileImage: string | null
  avatar: string | null
  createdAt: string
  updatedAt: string
  stats: IUserStats
}

export interface IPaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface IUsersResponse {
  success: boolean
  message: string
  meta: IPaginationMeta
  data: IUser[]
}
