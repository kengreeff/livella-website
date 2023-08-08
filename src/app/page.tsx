import Hero from "@/components/HomePage/Hero";
import Intro from "@/components/HomePage/Intro";
import KeyFeatures from "@/components/HomePage/KeyFeatures";
import MainNavigation from "@/components/MainNavigation";

function Home() {
  return (
    <main>
      <MainNavigation />

      <Hero />
      <Intro />
      <KeyFeatures />
    </main>
  )
}

export default Home
