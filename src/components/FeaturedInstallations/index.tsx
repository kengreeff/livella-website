import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"

import ReviewOneImage from './assets/review_one.jpeg'
import ReviewTwoImage from './assets/review_two.jpeg'
import ReviewThreeImage from './assets/review_three.jpeg'

import FeaturedInstall from "./FeaturedInstall"

const FeaturedInstallations = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTag colorScheme="black">
            Thousands of renovations and new builds with happy families
          </HeadingTag>

          <div className="grid lg:grid-cols-3 gap-16 w-full mt-8">
            <FeaturedInstall imageUrl={ReviewOneImage.src} title="3 Bedroom Renovation">
              &quot;We&apos;re not happy until you are. And we&apos;re available via phone an email, whether 
              you&apos;re having a problem with the unit or simply forgot how to program the 
              thermostat. Livella prides itself on the excellent reputation build from 
              30 years in the industry helping our trades and customers.&quot;
            </FeaturedInstall>

            <FeaturedInstall imageUrl={ReviewTwoImage.src} title="3 Bedroom Renovation">
              &quot;We&apos;re not happy until you are. And we&apos;re available via phone an email, whether 
              you&apos;re having a problem with the unit or simply forgot how to program the 
              thermostat. Livella prides itself on the excellent reputation build from 
              30 years in the industry helping our trades and customers.&quot;
            </FeaturedInstall>

            <FeaturedInstall imageUrl={ReviewThreeImage.src} title="3 Bedroom Renovation">
              &quot;We&apos;re not happy until you are. And we&apos;re available via phone an email, whether 
              you&apos;re having a problem with the unit or simply forgot how to program the 
              thermostat. Livella prides itself on the excellent reputation build from 
              30 years in the industry helping our trades and customers.&quot;
            </FeaturedInstall>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default FeaturedInstallations
