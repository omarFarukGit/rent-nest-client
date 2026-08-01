import CategoriesSection from "@/components/modules/home/CategoriesSection"
import CTASection from "@/components/modules/home/CTASection"
import FeaturedProperties from "@/components/modules/home/FeaturedProperties"
import HeroSection from "@/components/modules/home/HeroSection"
import HowItWorks from "@/components/modules/home/HowItWorks"
import TenantLandlordSection from "@/components/modules/home/TenantLandlordSection"
import Testimonials from "@/components/modules/home/Testimonials"
import WhyRentNest from "@/components/modules/home/WhyRentNest"

export default function HomePage() {
  
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <HowItWorks />
      <WhyRentNest />
      <FeaturedProperties />
      <TenantLandlordSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
