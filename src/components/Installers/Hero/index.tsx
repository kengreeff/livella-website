import { Nanum_Myeongjo } from 'next/font/google'
import { FaCheck } from 'react-icons/fa'

const nanumMyeongjo = Nanum_Myeongjo({ subsets: ['latin'], weight: '400' })

import ContentWrapper from '@/components/ContentWrapper'
import HeadingOne from '@/components/HeadingOne'

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
          style={{
            backgroundImage: `url(${HeroImage.src})`,
            backgroundPosition: 'bottom center',
          }}
        />

        <div className="relative z-10 p-16 lg:w-3/5">
          <HeadingOne>
            Livella, in store<br />
            or delivered to<br />
            your door
          </HeadingOne>

          <p
            className="mt-8 lg:mt-12 lg:text-xl leading-relaxed max-w-2xl"
          >
            We&apos;ve made it easy to find us, no matter what state you&apos;re in 
            Australia wide, and New Zealand. If there&apos;s not a store near you,
            just request a quote and we&apos;ll ship the product out to you next day.
          </p>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Hero
