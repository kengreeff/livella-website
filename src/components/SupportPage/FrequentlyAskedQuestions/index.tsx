import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import Question from '@/components/Question'

import type { FAQ } from "@/components/Question"

type FrequentlyAskedQuestionsProps = {
  faqs?: FAQ[],
}

const FrequentlyAskedQuestions = (props: FrequentlyAskedQuestionsProps) => {
  const { faqs = [] } = props

  return (
    <section className="w-full p-8 lg:p-16" id="faqs">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Frequently Asked Questions
          </HeadingTwo>

          <p className="mt-8">
            We often get asked the following questions, so to save you the time calling or emailing we&apos;ve 
            got an up to date list of information you might find useful if you&apos;re trying to figure out 
            if underfloor heating is right for you, if you can use it in a specific space or renovation 
            and if you&apos;ve got existing underfloor heating and have a question about using it.
          </p>

          <div className="flex flex-col mt-8">
            {faqs.map((faq) => (
              <Question className="border-b" key={faq.sys.id} title={faq.title}>
                {faq.body}
              </Question>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default FrequentlyAskedQuestions
