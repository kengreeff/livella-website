import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import NeedAnythingElse from "@/components/NeedAnythingElse"
import Question from '@/components/Question'

import type { FAQ } from "@/components/Question"

type FrequentlyAskedQuestionsProps = {
  faqs?: FAQ[],
}

const FrequentlyAskedQuestions = (props: FrequentlyAskedQuestionsProps) => {
  const { faqs = [] } = props

  return (
    <section className="w-full p-8 lg:p-16 pt-0">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Frequently Asked Questions
          </HeadingTwo>

          <p className="mt-8">
            Next day dispatch on products ordered through Trade installers and stockists 
            across Australia make Livella the best choice in heating solutions for 
            last minute renovations and well planned project builds.
          </p>

          <div className="flex flex-col mt-8">
            {faqs.map((faq) => (
              <Question className="border-b" key={faq.sys.id} title={faq.title}>
                {faq.body}
              </Question>
            ))}
          </div>

          <NeedAnythingElse />
        </div>
      </ContentWrapper>
    </section>
  )
}

export default FrequentlyAskedQuestions
