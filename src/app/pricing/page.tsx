import Footer from "@/components/Footer";
import Hero from "@/components/PricingPage/Hero";
import MainNavigation from "@/components/MainNavigation";
import QuoteForm from "@/components/QuoteForm";

const PricingPage = () => {
  return (
    <main>
      <MainNavigation />

      <Hero />
      <QuoteForm />

      <Footer />
    </main>
  )
}

export default PricingPage
