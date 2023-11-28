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
              Competitor Pricing Comparison
            </HeadingTag>

            <HeadingTwo className="mt-8">
              How Expensive is<br />
              Underfloor Heating?
            </HeadingTwo>

            <div className="flex w-full flex-col lg:flex-row">
              <div className="flex flex-col lg:w-1/2">
                <p className="mt-8">
                  Although underfloor heating is often seen as an initially expensive investment, its long-term benefits far outweigh the upfront
                  costs. Contrary to common perceptions, using our system to heat your home can be remarkably cost-effective due to the
                  efficiency and minimized energy consumption.
                </p>
                
                <p className="mt-8">
                  Livella's dedication to engaging top-tier local installers guarantees a seamless blend of quality and efficiency, ultimately
                  elevating the overall customer journey. Our innovative product design streamlines installation, cutting down on the time
                  tradespeople spend on-site.
                </p>

                <ul className="mt-8 list-disc ml-4">
                  <li>Livella stands out in the industry with unparalleled customer service and support.</li>
                  <li>Our distinctive product minimizes installation complexity, reducing the time tradespeople spend on-site.</li>
                  <li>Livella's dedication to engaging top-tier local installers guarantees a seamless blend of quality and efficiency.</li>
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
