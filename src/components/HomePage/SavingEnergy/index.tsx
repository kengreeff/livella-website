import NextImage from 'next/image'

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import LoungeImage from './assets/lounge.jpeg'

import ListItem from './ListItem'

const SavingEnergy = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="flex flex-col lg:w-1/3">
              <div className="relative" style={{ aspectRatio: '3/4' }}>
                <NextImage
                  fill
                  src={LoungeImage.src}
                  alt="Lounge"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className="flex flex-col mt-8 lg:w-2/3 lg:ml-8 lg:mt-0">
              <HeadingTag colorScheme="black">Saving Energy, Saving Money</HeadingTag>

              <HeadingTwo className="mt-8">
                Affordable comfort starts<br />
                from the ground up.
              </HeadingTwo>

              <p className="mt-8">
                Livella underfloor heating creates a closed loop of sustainable low energy heating.
              </p>

              <p className="mt-8">
                <strong>Smart controls and efficient usage conserves energy and keeps your entire home temperate. </strong>
                Underfloor heating means walking barefoot through the house in the middle of the night and 
                playing with your kids on the floor no matter what season.
                Welcoming spaces designed and installed by Livella’s licensed technicians 
                offering professionally installed service.
              </p>

              <p className="mt-8">
                24/7 troubleshooting and support backed by our 5 year product guarantee.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-8 w-full">
            <ul className="w-full lg:w-1/2">
              <ListItem>Thinnest most workable product on the market.</ListItem>
              <ListItem>Can be installed in tile glue after sub-floor.</ListItem>
              <ListItem>Radiant Heat warms the surfaces evenly.</ListItem>
              <ListItem>Fastest Install to speed up builds and renovations.</ListItem>
              <ListItem>Smart Thermostat automates floor heating.</ListItem>
              <ListItem>Maintenance Free Solution to heating the home.</ListItem>
              <ListItem>Built in circuit fault interruptor.</ListItem>
              <ListItem>Consistent comfortable warmth year round.</ListItem>
              <ListItem>Increased property value if selling or renting.</ListItem>
            </ul>

            <ul className="w-full lg:w-1/2">
              <ListItem>Zoned heating reduces wasted energy.</ListItem>
              <ListItem>Suitable for many flooring types and choices.</ListItem>
              <ListItem>Quick Heat Up Times (Minutes not hours).</ListItem>
              <ListItem>Completely silent operation.</ListItem>
              <ListItem>Invisible solution (no visible equipment).</ListItem>
              <ListItem>Damage alarms to protect your family.</ListItem>
              <ListItem>Compatible with solar power systems.</ListItem>
              <ListItem>Lower energy usage than most other solutions.</ListItem>
              <ListItem>Can be used on stairs and in wet areas.</ListItem>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default SavingEnergy
