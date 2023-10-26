import Button from '@/components/Button'
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import DiningRoomImage from './assets/dining.jpeg'

const BookFreeQuote = () => {
  return (
    <section
      className="
        bg-cover
        bg-left-bottom
        w-full
        p-8
        lg:p-16
      "
      style={{
        backgroundImage: `url(${DiningRoomImage.src})`,
      }}
    >
      <ContentWrapper>
        <div className="flex flex-col bg-black w-full p-8 lg:p-16">
          <HeadingTag colorScheme="white">Ready to turn up the heat?</HeadingTag>

          <HeadingTwo className="text-white mt-8">
            Homes worth living in,<br />
            Start with Livella
          </HeadingTwo>

          <p className="text-white mt-8">
            Once you’ve submitted a quote we’ll be in touch as soon as possible 
            after designing the ideal layout and equipment required to turn 
            your space from a cold unfinished project to a warm, cozy livable 
            home for you and the whole family.
          </p>

          <ul className="mt-4 list-disc ml-4">
            <li className="text-white">
              We offer phone and email support, and can answer absolutely any concerns or questions you have.
            </li>

            <li className="text-white">
            We have a huge number of professional installers all across Australia available to complete the job as soon as you’re ready to get started.
            </li>

            <li className="text-white">
              We offer comprehensive documentation and instructions for every one of our products.
            </li>

            <li className="text-white">
              Backed by our 30 years of experience is a quality guarantee to make sure you’re happy.
            </li>
          </ul>

          <div className="flex mt-8">
            <Button
              href="/pricing"
            >
              Get a free quote or consultation now
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default BookFreeQuote
