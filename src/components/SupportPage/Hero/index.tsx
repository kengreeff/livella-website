import ContentWrapper from '@/components/ContentWrapper'
import HeadingOne from '@/components/HeadingOne'

import KeyFeatures from './KeyFeatures'

const Hero = () => {
  return (
    <section className="bg-black relative text-gray-100 overflow-hidden pb-8 lg:pb-24">
      <ContentWrapper className="flex flex-col">
        <div className="relative z-10 p-8 lg:w-3/5">
          <HeadingOne>
            Best in Class<br />
            Help and Support
          </HeadingOne>

          <p
            className="mt-8 lg:mt-12 lg:text-xl leading-relaxed max-w-2xl"
          >
            We pride ourselves on being truly supportive and available to customers and trades. We believe its a key 
            component of offering products that will live with you in your home for decades. You can always reach us 
            via phone or email, or read through any of our resources to get the answer you need without contacting.
          </p>
        </div>

        <KeyFeatures />
      </ContentWrapper>
    </section>
  )
}

export default Hero
