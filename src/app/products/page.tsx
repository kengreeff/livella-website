import BookFreeQuote from "@/components/BookFreeQuote";
import FeaturedInstallations from "@/components/FeaturedInstallations";
import Footer from "@/components/Footer";
import Hero from "@/components/ProductsPage/Hero";
import Installers from "@/components/ProductsPage/Installers";
import MainNavigation from "@/components/MainNavigation";
import QuoteForm from "@/components/QuoteForm";
import Technical from "@/components/ProductsPage/Technical";
import Touchscreen from "@/components/ProductsPage/Touchscreen";

function ProductsPage() {
  return (
    <main>
      <MainNavigation />

      <Hero />
      <Touchscreen />
      <Technical />
      <Installers />

      <FeaturedInstallations />
      <BookFreeQuote />
      <QuoteForm />

      <Footer />
    </main>
  )
}

export default ProductsPage
