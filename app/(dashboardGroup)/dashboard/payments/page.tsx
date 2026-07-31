// app/dashboard/payments/page.tsx

import { TPaymentResponse } from "@/types/PaymentType"
import { getMyPayments } from "../../_actions/tenant/managePaymentAction"
import TenantPayments from "@/components/modules/dashboard/tenant/TenantPayments"

export default async function PaymentsPage() {
  const payments: TPaymentResponse = await getMyPayments()
  return <TenantPayments payments={payments} />
}
