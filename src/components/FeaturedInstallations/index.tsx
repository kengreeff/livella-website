"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"

import ReviewTwoImage from './assets/review_two.jpeg'

import FeaturedInstall from "./FeaturedInstall"

export type CaseStudy = {
  address: string,
  review: string,
  mainImage: {
    url: string,
  },
  sys: {
    id: string,
  },
  title: string,
}

type CaseStudiesData = {
  caseStudyCollection: {
    items: CaseStudy[],
  }
}

const GET_REVIEWS_QUERY: TypedDocumentNode<CaseStudiesData> = gql`
  query GetCaseStudies {
    caseStudyCollection(limit: 3) {
      items {
        address
        mainImage {
          url
        }
        review
        sys {
          id
        }
        title
      }
    }
  }
`

const FeaturedInstallations = () => {
  const { data } = useSuspenseQuery(GET_REVIEWS_QUERY)
  
  const caseStudies = data?.caseStudyCollection?.items || []
  if (!caseStudies.length) {
    return null
  }

  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTag colorScheme="black">
            Thousands of renovations and new builds with happy families
          </HeadingTag>

          <div className="grid lg:grid-cols-3 gap-16 w-full mt-8">
            {caseStudies.map((caseStudy) => (
              <FeaturedInstall
                address={caseStudy.address}
                key={caseStudy.sys?.id}
                imageUrl={caseStudy.mainImage?.url || ReviewTwoImage.src}
                title={caseStudy.title}
              >
                &quot;{caseStudy.review}&quot;
              </FeaturedInstall>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default FeaturedInstallations
