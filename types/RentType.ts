export type TRentalRequest = {
  id: string
  propertyId: string
  landlordId: string
  tenantId: string
  message: string
  status: "PENDING" | "APPROVED" | "REJECTED" | "PAID" | "CANCELLED"
  startDate: string
  endDate: string
  createdAt: string
  updatedAt: string

  property: {
    id: string
    title: string
    location: string
    price: string
    images: string[]
    availability: "AVAILABLE" | "RENTED" | "UNAVAILABLE"
  }

  landlord: {
    id: string
    name: string
    email: string
    phone: string | null
    profileImage: string | null
  }
}

export type TRentalRequestsResponse = {
  success: boolean
  message: string

  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }

  data: TRentalRequest[]
}
