"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import BookFreeQuote from "@/components/BookFreeQuote";
import CompetitorPricing from "@/components/HomePage/CompetitorPricing";
import DidYouKnow from "@/components/HomePage/DidYouKnow";
import FeaturedInstallations from "@/components/FeaturedInstallations";
import Footer from "@/components/Footer";
import FrequentlyAskedQuestions from "@/components/HomePage/FrequentlyAskedQuestions";
import Hero from "@/components/HomePage/Hero";
import InstallationLocations from "@/components/HomePage/InstallationLocations";
import Intro from "@/components/HomePage/Intro";
import KeyFeatures from "@/components/HomePage/KeyFeatures";
import MainNavigation from "@/components/MainNavigation";
import Products from "@/components/Products";
import Reference from "@/components/HomePage/Reference";
import SavingEnergy from "@/components/SavingEnergy";
import Statistics from "@/components/Statistics";

import type { FAQ } from "@/components/Question";

type FAQData = {
  faqCollection: {
    items: FAQ[],
  }
}

const GET_FAQS_QUERY: TypedDocumentNode<FAQData> = gql`
  query GetFAQs {
    faqCollection(limit: 5) {
      items {
        body
        sys {
          id
        }
        title
      }
    }
  }
`

function HomePage() {
  const { data: faqData } = useSuspenseQuery(GET_FAQS_QUERY)

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
      <SavingEnergy />
      <FeaturedInstallations />
      <CompetitorPricing />
      <DidYouKnow />
      <FrequentlyAskedQuestions faqs={faqData?.faqCollection?.items} />

      <BookFreeQuote />

      <Footer />
    </main>
  )
}

export default HomePage
