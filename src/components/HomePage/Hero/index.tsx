import { Nanum_Myeongjo } from 'next/font/google'
import { FaCheck } from 'react-icons/fa'

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '400' })

import Button from '@/components/Button'
import ContentWrapper from '@/components/ContentWrapper'

import HeroImage from './assets/hero.jpeg'

const Hero = () => {
  return (
    <section className="bg-black min-h-screen relative text-gray-100">
      <ContentWrapper>
        <div className="relative z-10 p-8">
          <h1
            className={`max-w-2xl text-4xl lg:text-6xl leading-tight tracking-wide mt-8 lg:mt-20`}
            style={{ ...nanumMyeongjo.style }}
          >
            Experience Unmatched
            Comfort and Efficiency
            with Livella Underfloor
            Heating.
          </h1>

          <p
            className="mt-8 lg:mt-12 lg:text-xl leading-relaxed max-w-lg"
          >
            For over 30 years, Livella has been creating comfort
            in both new builds and renovations across Australia
            and New Zealand. We use cutting-edge technology
            and skilled installers to ensure the finest quality
            in every space.<br /><br />
            Contact us today to start your journey to a warmer, cosier, and more energy-efficient environment.
          </p>

          <div className="flex flex-col lg:flex-row mt-8 lg:mt-12">
            <Button>
              Request Quote
            </Button>

            <Button buttonStyle="secondaryWhite" className="mt-4 lg:mt-0 lg:ml-2">
              Learn More
            </Button>
          </div>

          <ul className="mt-12">
            <li className="flex items-center">
              <FaCheck />
              <span className="ml-4">Fast, Efficient Home Heating</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Smart Controls and Affordable Pricing</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Custom designs for every room</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Space-Saving & Aesthetic Appeal</span>
            </li>
          </ul>
        </div>

        <div
          className="
            absolute
            bg-cover
            hidden
            lg:block
            w-3/5
            bg-white
            min-h-screen
            right-0
            z-0
          "
          style={{ backgroundImage: `url(${HeroImage.src})`}}
        />
      </ContentWrapper>
    </section>
  )
}

export default Hero
