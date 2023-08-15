import { ImYoutube } from 'react-icons/im'

import Button from '@/components/Button'
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import VideoImage from './assets/video.jpg'

const Intro = () => {
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
              <strong>Tired of icy cold floors sending shivers down your spine every winter?</strong> Sick of needing socks to run to the bathroom in the middle of the night? 
              Annoyed at the costs of heating the home with air con or space heaters? 
              Cold surfaces under-foot, in the bathrooms, kitchen, living spaces and even 
              the stairs make it harder to enjoy the home you’re investing so much in.
            </p>

            <p className="mt-8 leading-normal text-lg">
              <strong>Provide comfort for you and your family and increase your properties value while decreasing heating costs year round.</strong> No more 
              dreading those frosty mornings or struggling to keep your toes warm. 
              Our underfloor heating solution lets you enjoy a luxurious and inviting 
              atmosphere throughout your home, all year round.
            </p>

            <div className="flex mt-6">
              <Button>
                Design Your Dream Install
              </Button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Intro
