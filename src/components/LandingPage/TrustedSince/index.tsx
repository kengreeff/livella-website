import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

import GlassStairsImage from './assets/glass-stairs.jpeg'

type TrustedSinceProps = {
  locationName: string,
}

const TrustedSince = (props: TrustedSinceProps) => {
  const { locationName } = props

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
              Trusted in {locationName} Suburbs since 1994
            </HeadingTwo>

            <div className="flex mt-4">
              EST. 1994
            </div>

            <p className="mt-8">
              Every product is designed and tested locally for peak performance and electrical
              safety — and backed by a guarantee for your peace of mind.
            </p>

            <p className="mt-8">
              Best of all, Livella&apos;s range of programmable thermostats share their energy saving 
              smarts with other appliances to keep running costs low.
            </p>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default TrustedSince
