import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import OutdoorsImage from './assets/outdoors.jpg'
import ShowerImage from './assets/shower.jpg'
import StairsImage from './assets/stairs.jpg'

import InstallationLocation from "./InstallationLocation"

const InstallationLocations = () => {
  return (
    <section className="w-full lg:bg-black-60 p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTag className="lg:text-white" colorScheme="black" hrClassName="lg:border-white">
            What makes livella unique?
          </HeadingTag>

          <HeadingTwo className="mt-8 lg:mt-20 lg:text-white">
            Install almost<br />
            anywhere
          </HeadingTwo>

          <hr className="hidden lg:block border-white mt-8" />

          <div className="grid lg:grid-cols-3 gap-16 w-full mt-8 lg:mt-16">
            <InstallationLocation imageUrl={ShowerImage.src} title="Showers">
              A cold shower space can ruin the entire experience of a 
              home with heated floors. Livella’s unique construction 
              means heating any wet area is now possible.
            </InstallationLocation>

            <InstallationLocation imageUrl={StairsImage.src} title="Stairs">
              Transitioning from your downstairs to upstairs spaces 
              should feel disjointed and cold. The Livella product 
              is the only Australian product offering install on stairs.
            </InstallationLocation>

            <InstallationLocation imageUrl={OutdoorsImage.src} title="Outdoors">
            Imagine walking through your outdoor living space barefoot 
            in winter. With Livella it’s possible, and affordable.
            </InstallationLocation>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default InstallationLocations
