"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import ReviewTwoImage from './assets/review_two.jpeg'

import Review from "./Review"

export type Review = {
  body: string,
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
    reviewCollection(limit: 20) {
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

const RecentReviews = () => {
  const { data } = useSuspenseQuery(GET_REVIEWS_QUERY)
  
  const reviews = data?.reviewCollection?.items || []
  if (!reviews.length) {
    return null
  }

  return (
    <section className="w-full p-8 lg:p-16" id="faqs">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Recent Reviews
          </HeadingTwo>

          <div className="flex flex-col w-full mt-8">
            {reviews.map((review) => (
              <Review
                key={review.sys?.id}
                title={review.title}
              >
                &quot;{review.body}&quot;
              </Review>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default RecentReviews
