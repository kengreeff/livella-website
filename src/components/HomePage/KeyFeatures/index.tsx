import ContentWrapper from "@/components/ContentWrapper"
import HeatIcon from "@/components/Icons/Heat"
import PetsIcon from "@/components/Icons/Pets"
import PiggyBankIcon from "@/components/Icons/PiggyBank"

import KeyFeature from "./KeyFeature"

const KeyFeatures = () => {
  return (
    <section className="w-full">
      <ContentWrapper>
        <div className="border-b border-t grid lg:grid-cols-3 gap-4 w-full py-20">
          <KeyFeature
            icon={<PiggyBankIcon height={80} width={80} />}
            title="Efficient & Affordable"
          >
            Enjoy smart-programmed energy efficient heating to save you money on your bills.
            While increasing the potential value of your home.
          </KeyFeature>

          <KeyFeature
            icon={<PetsIcon height={80} width={80} />}
            title="Safe & Comfortable"
          >
            Enjoy smart-programmed energy efficient heating to save you money on your bills.
            While increasing the potential value of your home.
          </KeyFeature>

          <KeyFeature
            icon={<HeatIcon height={80} width={80} />}
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
