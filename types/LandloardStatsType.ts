export interface TLandlordDashboardStats {
  totalProperties: number;
  availableProperties: number;
  activeTenants: number;
  monthlyRevenue: number | string;
}

export interface TLandlordDashboardResponse {
  success: boolean;
  message: string;
  data: TLandlordDashboardStats;
}