import { ImYoutube } from 'react-icons/im'

import Button from '@/components/Button'
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import VideoImage from './assets/video.jpg'

type IntroProps = {
  locationName: string,
}

const Intro = (props: IntroProps) => {
  const { locationName } = props

  return (
    <section className="min-h-screen">
      <ContentWrapper>
        <div className="flex flex-col relative w-full">
          <div
            className="
              aspect-video
              bg-black
              flex
              items-center
              justify-center
              w-full
              lg:mt-16
              bg-cover
              bg-center
            "
            style={{ backgroundImage: `url(${VideoImage.src})` }}
          >
            <ImYoutube className="text-white text-8xl" />
          </div>

          <div className="bg-white lg:w-3/5 lg:-mt-20 lg:ml-16 p-8 lg:p-16 lg:pr-48">
            <HeadingTag colorScheme="black">Not just for cold winters</HeadingTag>

            <HeadingTwo className="mt-8">
              Say Hello to<br />
              complete home<br />
              comfort
            </HeadingTwo>

            <p className="mt-8 text-lg">
              Experience Unmatched Comfort and<br />
              Efficiency with Livella Underfloor Heating
            </p>

            <p className="mt-8 leading-normal text-lg">
              <strong>
                Immerse yourself in the luxury of custom-designed and professionally installed floor heating, 
                providing unparalleled comfort and control for your next {locationName} project.
              </strong>
            </p>

            <p className="mt-8 leading-normal text-lg">
              Ready to transform your space? Reach out today for a complimentary quote, whether you&apos;re embarking 
              on a new home project, renovation, or a commercial plan.
            </p>
            
            <p className="mt-8 leading-normal text-lg">
              Discover the art of heating homely spaces in {locationName} and it&apos;s 
              enchanting surrounds with Livella and our team of certified installers.
            </p>

            <div className="flex mt-6">
              <Button
                href="/pricing"
              >
                Free Quote
              </Button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Intro
