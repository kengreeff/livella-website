import { scroller } from 'react-scroll'

import { Nanum_Myeongjo } from 'next/font/google'
import { FaCheck } from 'react-icons/fa'

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '400' })

import Button from '@/components/Button'
import ContentWrapper from '@/components/ContentWrapper'

type HeroProps = {
  locationName: string,
  mainImageUrl: string,
}

const Hero = (props: HeroProps) => {
  const { locationName, mainImageUrl } = props

  return (
    <section className="bg-black min-h-screen relative text-gray-100">
      <ContentWrapper>
        <div className="relative z-10 p-8">
          <h1
            className={`max-w-4xl text-4xl lg:text-6xl leading-tight tracking-wide mt-8 lg:mt-20`}
            style={{ ...nanumMyeongjo.style }}
          >
            Sustainable flooring<br />
            solutions across<br />
            {locationName}.
          </h1>

          <p
            className="mt-8 lg:mt-12 lg:text-xl leading-relaxed max-w-2xl"
          >
            Survive {locationName} winters with the warmth<br />
            of Livella brand underfloor heating systems.<br />
            For decades we&apos;ve adorned homes and<br />
            commercial spaces across the greater<br />
            {locationName} area.
          </p>

          <div className="flex flex-col lg:flex-row mt-8 lg:mt-12">
            <Button
              onClick={() => scroller.scrollTo('quoteRequest', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
              })}
            >
              Request Quote
            </Button>

            <Button buttonStyle="secondaryWhite" className="mt-4 lg:mt-0 lg:ml-2">
              Learn More
            </Button>
          </div>

          <ul className="mt-12">
            <li className="flex items-center">
              <FaCheck />
              <span className="ml-4">Heat your {locationName} home affordably</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Smart Controls and Affordable Pricing</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Family, Pet and Allergy Friendly</span>
            </li>
          </ul>
        </div>

        <div
          className="
            absolute
            bg-cover
            hidden
            lg:block
            w-1/2
            bg-white
            min-h-screen
            right-0
            z-0
          "
          style={{ backgroundImage: `url(${mainImageUrl})`}}
        />
      </ContentWrapper>
    </section>
  )
}

export default Hero
