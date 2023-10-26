import BookFreeQuote from "@/components/BookFreeQuote";
import FeaturedInstallations from "@/components/FeaturedInstallations";
import Footer from "@/components/Footer";
import Hero from "@/components/AboutPage/Hero";
import MainNavigation from "@/components/MainNavigation";
import Mission from "@/components/AboutPage/Mission";
import OurDifference from "@/components/AboutPage/OurDifference";
import WhyChooseHeating from "@/components/AboutPage/WhyChooseHeating";

function AboutPage() {
  return (
    <main>
      <MainNavigation />

      <Hero />
      <Mission />
      <WhyChooseHeating />
      <OurDifference />
      <FeaturedInstallations />
      <BookFreeQuote />

      <Footer />
    </main>
  )
}

export default AboutPage
