// app/properties/page.tsx

import PropertyPage from "@/components/modules/property/PropertyPage"

import { TPropertiesResponse } from "@/types/PropertyType";
import { getAllProperties } from "../_actions/popertyActions";

export default async function Properties() {
  const properties: TPropertiesResponse = await getAllProperties();
  console.log(properties)
  return <PropertyPage properties={properties} />
}
