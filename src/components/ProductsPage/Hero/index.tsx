import { Nanum_Myeongjo } from 'next/font/google'
import { FaCheck } from 'react-icons/fa'

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '400' })

import Button from '@/components/Button'
import ContentWrapper from '@/components/ContentWrapper'

import HeroImage from './assets/hero.jpeg'

const Hero = () => {
  return (
    <section className="bg-black relative text-gray-100 overflow-hidden pb-8 lg:pb-24">
      <ContentWrapper
        className="flex justify-end"
      >
        <div
          className="
            absolute
            bg-cover
            hidden
            lg:block
            w-2/5
            bg-white
            min-h-screen
            left-0
            z-0
          "
          style={{ backgroundImage: `url(${HeroImage.src})`}}
        />

        <div className="relative z-10 p-8 lg:w-3/5">
          <h1
            className={`max-w-4xl text-4xl lg:text-6xl leading-tight tracking-wide mt-8 lg:mt-20`}
            style={{ ...nanumMyeongjo.style }}
          >
            Smart<br />
            Programmable<br />
            Thermostats
          </h1>

          <p
            className="mt-8 lg:mt-12 lg:text-xl leading-relaxed max-w-2xl"
          >
            Our easy to use programmable thermostats<br />
            open up control of flooring, heated towel rails<br />
            and mirror demisters all in one unit.
          </p>

          <ul className="mt-12">
            <li className="flex items-center">
              <FaCheck />
              <span className="ml-4">Save energy and effort</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Automate your home heating</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Designed for Wet Areas</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Customisable Faceplates to match your styling</span>
            </li>

            <li className="flex items-center mt-2">
              <FaCheck />
              <span className="ml-4">Horizontal or Vertical Orientation</span>
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Hero
