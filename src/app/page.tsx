import Hero from "@/components/HomePage/Hero";
import InstallationLocations from "@/components/HomePage/InstallationLocations";
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
      <InstallationLocations />
    </main>
  )
}

export default Home
