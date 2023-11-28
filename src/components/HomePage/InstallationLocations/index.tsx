import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"
import InstallationLocation from "@/components/InstallationLocation"

import OutdoorsImage from './assets/outdoors.jpg'
import ShowerImage from './assets/shower.jpg'
import StairsImage from './assets/stairs.jpg'

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
              Adding underfloor heating in a shower area brings luxury and comfort. It helps dry the shower floor faster, reducing moisture
              and preventing mould or mildew. The warmth also helps evaporate extra moisture, keeping the shower space cleaner and drier.
            </InstallationLocation>

            <InstallationLocation imageUrl={StairsImage.src} title="Stairs">
              Moving from downstairs to upstairs shouldn't feel disconnected. Underfloor heating on stairs maintains a consistent
              temperature throughout the house, ensuring warmth in this often-overlooked area.
            </InstallationLocation>

            <InstallationLocation imageUrl={OutdoorsImage.src} title="Outdoors">
              Outdoor underfloor heating extends your outdoor living season by warming spaces like patios, decks and around pools during
              colder months. Ensuring comfort all year round.
            </InstallationLocation>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default InstallationLocations
