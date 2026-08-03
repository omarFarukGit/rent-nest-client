import CategoriesSection from "@/components/modules/home/CategoriesSection"
import CTASection from "@/components/modules/home/CTASection"
import FeaturedProperties from "@/components/modules/home/FeaturedProperties"
import HeroSection from "@/components/modules/home/HeroSection"
import HowItWorks from "@/components/modules/home/HowItWorks"
import TenantLandlordSection from "@/components/modules/home/TenantLandlordSection"
import Testimonials from "@/components/modules/home/Testimonials"
import WhyRentNest from "@/components/modules/home/WhyRentNest"
import { getAllCategory } from "@/services/category"
import { TCategoriesResponse } from "@/types/CategoryType"

export default async function HomePage() {
  const categories: TCategoriesResponse = await getAllCategory()

  return (
    <>
      <HeroSection />

      {/* Browse by category */}
      <CategoriesSection categories={categories} />

      {/* Show popular listings early */}
      <FeaturedProperties />

      {/* Explain the platform */}
      <HowItWorks />

      {/* Why choose RentNest */}
      <WhyRentNest />

      {/* Separate value for both user types */}
      <TenantLandlordSection />

      {/* Social proof */}
      <Testimonials />

      {/* Final call to action */}
      <CTASection />
    </>
  )
}
