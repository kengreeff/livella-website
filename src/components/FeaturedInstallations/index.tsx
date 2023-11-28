"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"

import ReviewOneImage from './assets/review_one.jpeg'
import ReviewTwoImage from './assets/review_two.jpeg'
import ReviewThreeImage from './assets/review_three.jpeg'

import FeaturedInstall from "./FeaturedInstall"

export type Review = {
  address: string,
  body: string,
  mainImage: {
    url: string,
  },
  sys: {
    id: string,
  },
  title: string,
}

type ReviewsData = {
  reviewCollection: {
    items: Review[],
  }
}

const GET_REVIEWS_QUERY: TypedDocumentNode<ReviewsData> = gql`
  query GetReviews {
    reviewCollection(limit: 3) {
      items {
        address
        body
        mainImage {
          url
        }
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
  
  const reviews = data?.reviewCollection?.items || []
  if (!reviews.length) {
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
            {reviews.map((review) => (
              <FeaturedInstall
                address={review.address}
                key={review.sys?.id}
                imageUrl={review.mainImage?.url || ReviewTwoImage.src}
                title={review.title}
              >
                &quot;{review.body}&quot;
              </FeaturedInstall>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default FeaturedInstallations
