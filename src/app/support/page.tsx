"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

import MainNavigation from "@/components/MainNavigation";

const GET_LATEST_FAQ_QUERY = gql`
  query LatestFAQs {
    faqCollection(limit: 10) {
      items {
        title
        body
      }
    }
  }
`

const SupportPage = () => {
  const { data } = useSuspenseQuery(GET_LATEST_FAQ_QUERY);

  return (
    <main>
      <MainNavigation />

      <div>
        {data?.faqCollection?.items?.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default SupportPage
