import BookFreeQuote from "@/components/HomePage/BookFreeQuote";
import Hero from "@/components/HomePage/Hero";
import InstallationLocations from "@/components/HomePage/InstallationLocations";
import Intro from "@/components/HomePage/Intro";
import KeyFeatures from "@/components/HomePage/KeyFeatures";
import MainNavigation from "@/components/MainNavigation";
import Products from "@/components/HomePage/Products";
import Reference from "@/components/HomePage/Reference";
import Statistics from "@/components/HomePage/Statistics";

function Home() {
  return (
    <main>
      <MainNavigation />

      <Hero />
      <Intro />
      <KeyFeatures />
      <InstallationLocations />
      <Statistics />
      <Reference />
      <Products />

      <BookFreeQuote />
    </main>
  )
}

export default Home
