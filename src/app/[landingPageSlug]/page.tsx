"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import Footer from "@/components/Footer";
import MainNavigation from "@/components/MainNavigation";

type LandingPage = {
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
        title
        slug
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

      <div className="h-screen">
        {landingPageData?.title} Landing Page
      </div>

      <Footer />
    </main>
  )
}

export default LandingPage
