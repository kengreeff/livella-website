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
              Say hello to<br />
              complete home<br />
              comfort
            </HeadingTwo>

            <p className="mt-8 text-lg">
              Experience Unmatched Comfort and<br />
              Efficiency with Livella Underfloor Heating
            </p>

            <p className="mt-8 leading-normal text-lg">
              <strong>Are you tired of dealing with cold spots in your home?</strong> Fed up with bulky radiators or heating units taking up valuable space in
              your rooms? Frustrated that different rooms in your house have varying temperatures, making it challenging to achieve
              consistent warmth throughout?
            </p>

            <p className="mt-8 leading-normal text-lg">
              <strong>Livella is dedicated to redefining comfort.</strong> We firmly believe that every space should have the luxurious experience of underfloor
              heating. Our commitment is to provide you with the highest quality products and exceptional service to make this a reality. Our
              underfloor heating solution lets you enjoy a luxurious and inviting atmosphere throughout your home, all year round.
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
