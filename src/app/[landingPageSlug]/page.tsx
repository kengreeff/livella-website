"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import AdditionalFeatures from "@/components/LandingPage/AdditionalFeatures";
import BookFreeQuote from "@/components/BookFreeQuote";
import FeaturedInstallations from "@/components/FeaturedInstallations";
import Footer from "@/components/Footer";
import Hero from "@/components/LandingPage/Hero";
import InstallationLocations from "@/components/LandingPage/InstallationLocations";
import Intro from "@/components/LandingPage/Intro";
import KeyFeatures from "@/components/LandingPage/KeyFeatures";
import MainNavigation from "@/components/MainNavigation";
import Products from "@/components/Products";
import QuoteForm from "@/components/QuoteForm";
import SavingEnergy from "@/components/SavingEnergy";
import Statistics from "@/components/Statistics";
import TrustedSince from "@/components/LandingPage/TrustedSince";

type LandingPage = {
  mainImage: {
    url: string,
  },
  slug: string,
  title: string,
}

type LandingPageData = {
  landingPageCollection: {
    items: LandingPage[],
  }
}

const GET_LANDING_PAGE_QUERY: TypedDocumentNode<LandingPageData> = gql`
  query GetLandingPage($slug: String!) {
    landingPageCollection(where: { slug: $slug }, limit: 1) {
      items {
        mainImage {
          url
        }
        slug
        title
      }
    }
  }
`

type LandingPageProps = {
  params: {
    landingPageSlug?: string,
  }
}

function LandingPage(props: LandingPageProps) {
  const { params: { landingPageSlug } } = props

  const { data } = useSuspenseQuery(GET_LANDING_PAGE_QUERY, {
    variables: {
      slug: landingPageSlug,
    },
  })

  const landingPageData = data?.landingPageCollection?.items?.[0]
  console.log(landingPageData, props)

  return (
    <main>
      <MainNavigation />

      <Hero
        locationName={landingPageData?.title}
        mainImageUrl={landingPageData?.mainImage?.url}
      />
      <Intro locationName={landingPageData?.title} />
      <TrustedSince locationName={landingPageData?.title} />
      <KeyFeatures />
      <InstallationLocations />
      <Statistics />
      <AdditionalFeatures />
      <Products />
      <SavingEnergy />
      <FeaturedInstallations />

      <BookFreeQuote />

      <QuoteForm />

      <Footer />
    </main>
  )
}

export default LandingPage
