// app/landlord-dashboard/properties/page.tsx

import LandlordMyProperties from "@/components/modules/dashboard/landlord/LandlordMyProperties";
import { TPropertiesResponse } from "@/types/PropertyType";
import { getMyProperties } from "../../_actions/landloard/propertiesActions";


export default async function MyPropertiesPage() {
  const properties: TPropertiesResponse=await getMyProperties()
  return <LandlordMyProperties properties={properties} />;
}