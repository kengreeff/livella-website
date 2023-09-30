import BookFreeQuote from "@/components/HomePage/BookFreeQuote";
import FeaturedInstallations from "@/components/FeaturedInstallations";
import Footer from "@/components/Footer";
import Hero from "@/components/ProductsPage/Hero";
import Technical from "@/components/ProductsPage/Technical";
import Touchscreen from "@/components/ProductsPage/Touchscreen";
import MainNavigation from "@/components/MainNavigation";

function Products() {
  return (
    <main>
      <MainNavigation />

      <Hero />
      <Touchscreen />
      <Technical />

      <FeaturedInstallations />
      <BookFreeQuote />

      <Footer />
    </main>
  )
}

export default Products
