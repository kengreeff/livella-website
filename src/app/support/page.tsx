"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import DownloadableResources from "@/components/SupportPage/DownloadableResources";
import FeaturedInstallations from "@/components/FeaturedInstallations";
import Footer from "@/components/Footer";
import FrequentlyAskedQuestions from "@/components/SupportPage/FrequentlyAskedQuestions";
import Hero from "@/components/SupportPage/Hero";
import MainNavigation from "@/components/MainNavigation";
import RecentReviews from "@/components/SupportPage/RecentReviews";
import StillHaveQuestions from "@/components/SupportPage/StillHaveQuestions";

import type { FAQ } from "@/components/Question";

import type { DownloadableResource } from "@/components/SupportPage/DownloadableResources";

type DownloadableResourceData = {
  downloadableResourceCollection: {
    items: DownloadableResource[],
  }
}

const GET_DOWNLOADABLE_RESOURCES_QUERY: TypedDocumentNode<DownloadableResourceData> = gql`
  query GetDownloadResources {
    downloadableResourceCollection {
      items {
        title
        file {
          url
        }
        sys {
          id
        }
      }
    }
  }
`

type FAQData = {
  faqCollection: {
    items: FAQ[],
  }
}

const GET_FAQS_QUERY: TypedDocumentNode<FAQData> = gql`
  query GetFAQs {
    faqCollection {
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

const SupportPage = () => {
  const { data: faqData } = useSuspenseQuery(GET_FAQS_QUERY)
  const { data: downloadableResourceData } = useSuspenseQuery(GET_DOWNLOADABLE_RESOURCES_QUERY)

  return (
    <main>
      <MainNavigation />

      <Hero />
      <FrequentlyAskedQuestions faqs={faqData?.faqCollection?.items} />
      <FeaturedInstallations />
      <RecentReviews />
      <DownloadableResources
        downloadableResources={downloadableResourceData?.downloadableResourceCollection?.items}
      />
      <StillHaveQuestions />

      <Footer />
    </main>
  )
}

export default SupportPage
