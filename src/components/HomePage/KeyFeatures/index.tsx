import ContentWrapper from "@/components/ContentWrapper"
import HeatIcon from "@/components/Icons/Heat"
import PetsIcon from "@/components/Icons/Pets"
import PiggyBankIcon from "@/components/Icons/PiggyBank"

import KeyFeature from "@/components/KeyFeature"

const KeyFeatures = () => {
  return (
    <section className="w-full">
      <ContentWrapper>
        <div className="border-b border-t grid lg:grid-cols-3 gap-4 w-full py-20 px-8 lg:px-0">
          <KeyFeature
            className="mb-8 lg:mb-0"
            icon={<PiggyBankIcon height={60} width={60} />}
            title="Efficient & Affordable"
          >
            Livella systems are highly efficient, keeping
            heat longer and using less energy than
            traditional heating methods, which means
            lower utility bills and more cost-effective
            heating solution over time.
          </KeyFeature>

          <KeyFeature
            className="mb-8 lg:mb-0"
            icon={<PetsIcon height={60} width={60} />}
            title="Safe & Comfortable"
          >
            Underfloor heating reduces airborne particles
            compared to traditional systems by not using
            forced air that spreads dust, pet dander, and
            allergens in the space.
          </KeyFeature>

          <KeyFeature
            icon={<HeatIcon height={60} width={60} />}
            title="Year Round Comfort"
          >
            Our automated systems allow you to personalize
            multiple temperature settings daily, matching your
            routines effortlessly. This adaptability ensures no
            energy is wasted, perfectly aligning with your
            schedules throughout the year.
          </KeyFeature>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default KeyFeatures
