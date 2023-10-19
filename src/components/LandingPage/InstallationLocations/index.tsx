import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"
import InstallationLocation from "@/components/InstallationLocation"

import CoverageImage from './assets/coverage.jpg'
import OutdoorsImage from './assets/outdoors.jpg'
import RoomsImage from './assets/rooms.jpg'

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
            <InstallationLocation imageUrl={RoomsImage.src} title="Small or Large Rooms">
              Configurable to suit rooms from 1 square metre up to hundreds. 
              A wide range of heater sizes accomodate any project.
            </InstallationLocation>

            <InstallationLocation imageUrl={CoverageImage.src} title="Full Coverage">
              Livella&apos;s systems are designed at install, room specific cable 
              layouts allow us to evenly heat every corner and along irregular edges, 
              over stairs and into showers.
            </InstallationLocation>

            <InstallationLocation imageUrl={OutdoorsImage.src} title="Quick to Warm">
              Only heat occupied rooms, and program the smart thermostat to turn on and 
              off when it&apos;s needed with fast warm up times keeping your comfortable 
              even in an unexpected cold snap.
            </InstallationLocation>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default InstallationLocations
