import { HiOutlineMail, HiPhone } from "react-icons/hi"

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

import Question from './Question'

const FrequentlyAskedQuestions = () => {
  return (
    <section className="w-full p-16 pt-0">
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
            <Question className="border-b">
              Is it safe for pets?
            </Question>

            <Question className="border-b">
              Is it safe for children?
            </Question>

            <Question className="border-b">
              Can I automate or program the heating?
            </Question>

            <Question className="border-b">
              How do I figure out how much equipment I need to buy?
            </Question>
            
            <Question className="border-b">
              Is underfloor heating expensive?
            </Question>
            
            <Question className="border-b">
              How long does it take to install?
            </Question>
            
            <Question className="border-b">
              Can I choose underfloor heating after already laying sand cement?
            </Question>
            
            <Question>
              Will it work on slab?
            </Question>
          </div>

          <div className="text-center mt-8">
            <span>
              Need anything else?
            </span>

            <div className="flex justify-center border mt-4 p-8">
              <span className="flex items-center">
                <HiPhone style={{ marginRight: 8 }} /> 1300 350 607 (AU)
              </span>
              
              <span className="flex items-center mx-8">
                <HiPhone style={{ marginRight: 8 }} /> 1300 350 607 (NZ)
              </span>

              <span className="flex items-center">
                <HiOutlineMail style={{ marginRight: 8 }} /> support@livella.com
              </span>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default FrequentlyAskedQuestions
