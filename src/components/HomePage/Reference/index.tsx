import { FaStar } from "react-icons/fa"

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import HeadingThree from "@/components/HeadingThree"

import GlassStairsImage from './assets/glass-stairs.jpeg'

const Reference = () => {
  return (
    <section className="w-full p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full relative">
          <div
            className="
              absolute
              bg-cover
              bg-white
              left-0
              z-0
            "
            style={{
              aspectRatio: 860 / 585,
              backgroundImage: `url(${GlassStairsImage.src})`,
              width: '60%',
            }}
          />

          <div
            className="
              justify-center
              flex
              flex-col
              mt-16
              p-16
              right-0
              self-end
              z-10
            "
            style={{
              aspectRatio: 860 / 585,
              backgroundColor: '#F9F7F3',
              top: 100,
              width: '60%',
            }}
          >
            <HeadingTwo className="mt-0">
              “The top tagline pulled out of the main quote”
            </HeadingTwo>

            <div className="flex mt-4">
              <FaStar style={{ marginRight: 8 }} />
              <FaStar style={{ marginRight: 8 }} />
              <FaStar style={{ marginRight: 8 }} />
              <FaStar style={{ marginRight: 8 }} />
              <FaStar />
            </div>

            <HeadingThree>
              Mona Vale, NSW
            </HeadingThree>

            <p className="mt-8">
              “We’re not happy until you are. And we’re available via phone an email, 
              whether you’re having a problem with the unit or simply forgot how 
              to program the thermostat. Livella prides itself on the excellent 
              reputation build from 30 years in the industry helping our trades and customers.”
            </p>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Reference
