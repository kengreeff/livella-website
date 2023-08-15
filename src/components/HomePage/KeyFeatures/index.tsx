import ContentWrapper from "@/components/ContentWrapper"
import HeatIcon from "@/components/Icons/Heat"
import PetsIcon from "@/components/Icons/Pets"
import PiggyBankIcon from "@/components/Icons/PiggyBank"

import KeyFeature from "./KeyFeature"

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
            Enjoy smart-programmed energy efficient heating to save you money on your bills.
            While increasing the potential value of your home.
          </KeyFeature>

          <KeyFeature
            className="mb-8 lg:mb-0"
            icon={<PetsIcon height={60} width={60} />}
            title="Safe & Comfortable"
          >
            Enjoy smart-programmed energy efficient heating to save you money on your bills.
            While increasing the potential value of your home.
          </KeyFeature>

          <KeyFeature
            icon={<HeatIcon height={60} width={60} />}
            title="Year Round Comfort"
          >
            Enjoy smart-programmed energy efficient heating to save you money on your bills.
            While increasing the potential value of your home.
          </KeyFeature>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default KeyFeatures
