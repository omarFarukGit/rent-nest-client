export type PaymentStatus = "PAID" | "PENDING" | "FAILED"

export type PaymentProvider = "STRIPE" | "SSLCOMMERZ"

export type RentalRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "CANCELLED"


export type PropertyAvailability =
  | "AVAILABLE"
  | "RENTED"
  | "UNAVAILABLE"


export interface IRentalProperty {
  id: string
  title: string
  location: string
  price: string
  images: string[]
  availability: PropertyAvailability
}


export interface IUserInfo {
  id: string
  name: string
  email: string
  phone: string | null
  profileImage: string | null
}


export interface IPayment {
  id: string
  amount: number
  status: PaymentStatus
  provider: PaymentProvider
  createdAt: string
}


export interface IRentalRequest {
  id: string

  property: IRentalProperty

  tenant: IUserInfo

  landlord: IUserInfo

  status: RentalRequestStatus

  message: string

  startDate: string

  endDate: string

  payment: IPayment | null

  createdAt: string

  updatedAt: string
}


export interface IRentalRequestMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}


export interface IRentalRequestResponse {
  success: boolean
  message: string
  meta: IRentalRequestMeta
  data: IRentalRequest[]
}