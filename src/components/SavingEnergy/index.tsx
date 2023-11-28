import NextImage from 'next/image'

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"
import ListItem from '@/components/ListItem'

import LoungeImage from './assets/lounge.jpeg'


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
                Livella's underfloor heating establishes a sustainable, low-energy heating cycle. With intelligent controls and optimized usage, it
                preserves energy while ensuring consistent temperatures throughout your entire home.
              </p>

              <p className="mt-8">
                <strong>Experience the luxury of walking barefoot in your house at any time</strong>, engaging with your kids on the floor, regardless of the
                season. Livella's licensed technicians craft inviting spaces, providing expert installation services.
              </p>

              <p className="mt-8">
                24/7 troubleshooting and support backed by our 10 year product guarantee.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-8 w-full">
            <ul className="w-full lg:w-1/2">
              <ListItem>Thinnest most workable product on the market.</ListItem>
              <ListItem>Radiant Heat warms the surfaces evenly.</ListItem>
              <ListItem>Fast Install to speed up builds and renovations.</ListItem>
              <ListItem>Smart Thermostat automates floor heating.</ListItem>
              <ListItem>Maintenance Free Solution to heating the home.</ListItem>
              <ListItem>Consistent comfortable warmth year round.</ListItem>
              <ListItem>Increased property value if selling or renting.</ListItem>
            </ul>

            <ul className="w-full lg:w-1/2">
              <ListItem>Zoned heating reduces wasted energy.</ListItem>
              <ListItem>Suitable for many flooring types and choices.</ListItem>
              <ListItem>Completely silent operation.</ListItem>
              <ListItem>Invisible solution (no visible equipment).</ListItem>
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
