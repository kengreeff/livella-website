import { Nanum_Myeongjo } from 'next/font/google'

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

        <div className="relative z-10 p-8 py-20 lg:w-3/5">
          <HeadingOne>
            Trusted since 1994<br />
            and building for the future
          </HeadingOne>

          <p
            className="mt-8 lg:mt-12 lg:text-xl leading-relaxed max-w-2xl"
          >
            At Livella we are passionate about transforming spaces into cozy, comfortable, and energy-efficient 
            havens through the magic of underfloor heating. With years of industry experience and a commitment 
            to innovation, we have become a trusted name in the world of heating solutions, throughout Australia and New Zealand. 
          </p>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Hero
