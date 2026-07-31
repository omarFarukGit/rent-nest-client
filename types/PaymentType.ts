export type TPaymentResponse = {
  success: boolean
  message: string
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
  data: Payment[]
}

export type Payment = {
  id: string
  rentalRequestId: string
  amount: number
  provider: "STRIPE"
  transactionId: string
  status: "PAID" | "PENDING" | "FAILED"
  paymentDetails: PaymentDetails
  createdAt: string
  updatedAt: string
  rental_request: RentalRequest
}

export type PaymentDetails = {
  id: string
  amount: number
  paidAt: string
  status: "PAID"
  currency: string
  tenantId: string
  customerId: string | null
  landlordId: string
  propertyId: string
  initiatedAt: string
  receiptEmail: string | null
  amountInCents: number
  customerEmail: string
  paymentMethod: string
  paymentStatus: string
  propertyTitle: string
  sessionStatus: string
  customerDetails: CustomerDetails
  paymentIntentId: string
  paymentMethodId: string
  stripeSessionId: string
  stripeSessionUrl: string
}

export type CustomerDetails = {
  name: string
  email: string
  phone: string | null
  address: {
    city: string | null
    line1: string | null
    line2: string | null
    state: string | null
    country: string
    postal_code: string | null
  }
  tax_ids: string[]
  tax_exempt: string
  business_name: string | null
  individual_name: string | null
}

export type RentalRequest = {
  id: string
  propertyId: string
  landlordId: string
  tenantId: string
  message: string
  status: "APPROVED" | "REJECTED" | "PENDING"
  startDate: string
  endDate: string
  createdAt: string
  updatedAt: string
  property: Property
  tenant: UserInfo
  landlord: UserInfo
}

export type Property = {
  id: string
  title: string
  location: string
  price: string
  images: string[]
}

export type UserInfo = {
  id: string
  name: string
  email: string
  phone: string | null
}