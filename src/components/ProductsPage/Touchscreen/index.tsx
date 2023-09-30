import NextImage from 'next/image'

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import MockupImage from './assets/mockup.jpeg'

import ListItem from './ListItem'

const Touchscreen = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex flex-col lg:w-1/3">
              <div className="relative" style={{ aspectRatio: '3/4' }}>
                <NextImage
                  fill
                  src={MockupImage.src}
                  alt="Deluxe Touchscreen Thermostat"
                  style={{ objectFit: 'cover', objectPosition: '30%' }}
                />
              </div>
            </div>
            
            <div className="flex flex-col mt-8 lg:w-2/3 lg:ml-8 lg:mt-0">
              <HeadingTag colorScheme="black">LU-AP5000</HeadingTag>

              <HeadingTwo className="mt-8">
                Deluxe<br />
                Touchscreen
              </HeadingTwo>

              <p className="mt-8">
                Save on energy costs and automate home comfort.
              </p>

              <p className="mt-8">
                <strong>Customisable touch screen control over all your heating appliances. </strong>
                Comfort at your fingertips with smart settings you can control when and where to heat, 
                manually override those settings without losing them and adapt to the environment 
                with surface and air sensors.
              </p>

              <p className="mt-8">
                This thermostat is included as standard with an PK5000 floor heating installation kit.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-8 w-full">
            <ul className="w-full lg:w-1/2">
              <ListItem>Slim unobtrusive design.</ListItem>
              <ListItem>Vertical or Horizontal Orientation.</ListItem>
              <ListItem>Suits any bathroom with customisable faceplates.</ListItem>
              <ListItem>Multi-Appliance Management.</ListItem>
              <ListItem>Air Temperature Sensors.</ListItem>
              <ListItem>Floor Temperature Sensors.</ListItem>
              <ListItem>Adapt your heating to ambient temperatures.</ListItem>
              <ListItem>Daily Scheduling for weekdays and weekends.</ListItem>
              <ListItem>Manually override set schedules temporarily.</ListItem>
            </ul>

            <ul className="w-full lg:w-1/2">
              <ListItem>Control Heated Towel Rails.</ListItem>
              <ListItem>Control Zoned Under Floor Heating.</ListItem>
              <ListItem>Match existing fixtures.</ListItem>
              <ListItem>Completely silent operation.</ListItem>
              <ListItem>Night mode.</ListItem>
              <ListItem>Easy to set up and use.</ListItem>
              <ListItem>Can be utilised with most underfloor solutions.</ListItem>
              <ListItem>Operate on Minimum and Maximum Heat Ranges.</ListItem>
              <ListItem>Replace existing thermostats.</ListItem>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Touchscreen
