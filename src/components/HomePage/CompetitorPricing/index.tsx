import NextImage from 'next/image'

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import GraphImage from './assets/graph.svg'

const CompetitorPricing = () => {
  return (
    <section className="w-full p-8 lg:py-32 lg:px-16 bg-black">
      <ContentWrapper>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex flex-col text-gray-100">
            <HeadingTag>
              How Expensive is Underfloor Heating?
            </HeadingTag>

            <HeadingTwo className="mt-8">
              Competitor Pricing<br />
              Comparison
            </HeadingTwo>

            <div className="flex w-full flex-col lg:flex-row">
              <div className="flex flex-col lg:w-1/2">
                <p className="mt-8">
                  How expensive is underfloor heating? You&apos;d be surprised to find that heating your entire home is much 
                  more affordable in long term costs and the initial install than you might feel. Livella produces a 
                  premium product and service that costs more on average than the cheapest competitors but less than the 
                  brands that overcharge for their product and service.
                </p>

                <ul className="mt-8 list-disc ml-4">
                  <li>Livella&apos;s after sales service and support is unmatched in the industry.</li>
                  <li>Our unique product reduces install complexity and the time trades need to be on-site.</li>
                  <li>Easiest to use thermostat controller.</li>
                  <li>Using the best local installers.</li>
                </ul>
              </div>

              <div className="flex flex-col lg:items-center justify-center lg:w-1/2 mt-16 lg:mt-0">
                <NextImage alt="Competitor Graph" height={330} width={507} src={GraphImage.src} />
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default CompetitorPricing
