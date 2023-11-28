import { FaStar } from "react-icons/fa"

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import HeadingThree from "@/components/HeadingThree"

import GlassStairsImage from './assets/glass-stairs.jpeg'

const Reference = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full relative">
          <div
            className="
              absolute
              bg-cover
              bg-white
              left-0
              z-0
              w-full
              lg:w-3/5
            "
            style={{
              aspectRatio: 860 / 585,
              backgroundImage: `url(${GlassStairsImage.src})`,
            }}
          />

          <div
            className="
              justify-center
              flex
              flex-col
              mt-64
              lg:mt-16
              p-8
              lg:p-16
              right-0
              self-end
              z-10
              w-full
              lg:w-3/5
            "
            style={{
              aspectRatio: 860 / 585,
              backgroundColor: '#F9F7F3',
              top: 100,
            }}
          >
            <HeadingTwo className="mt-0">
              “Where Exceptional Warmth Meets Seamless Professionalism”
            </HeadingTwo>

            <div className="flex mt-4">
              <FaStar style={{ marginRight: 8 }} />
              <FaStar style={{ marginRight: 8 }} />
              <FaStar style={{ marginRight: 8 }} />
              <FaStar style={{ marginRight: 8 }} />
              <FaStar />
            </div>

            <HeadingThree>
              Nathan, Manly NSW
            </HeadingThree>

            <p className="mt-8">
              “I had an exceptional experience with Livella's underfloor heating supply and installation service. The system's performance
              has truly impressed, delivering consistent warmth across the floors. The team's professionalism was remarkable, seamlessly
              integrating the system into my home without causing any disruption. Their commitment to ensuring my confidence and keeping
              me well-informed throughout the entire experience was highly appreciated”
            </p>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Reference
