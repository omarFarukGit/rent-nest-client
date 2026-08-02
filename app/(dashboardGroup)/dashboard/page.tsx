import TenantDashboardHome from "@/components/modules/dashboard/tenant/TenantDashboardHome";
import { getTenantDashboardStats } from "../_actions/tenant/tenantDashboardActions";



export default async function DashboardPage() {

  const result = await getTenantDashboardStats();


  return (
    <TenantDashboardHome
      data={result.data}
    />
  );
}