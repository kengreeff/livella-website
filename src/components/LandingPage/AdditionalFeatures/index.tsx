import ContentWrapper from "@/components/ContentWrapper"
import HeatIcon from "@/components/Icons/Heat"
import ListItem from '@/components/ListItem'
import PiggyBankIcon from "@/components/Icons/PiggyBank"
import SpannerIcon from "@/components/Icons/Spanner"

import KeyFeature from "@/components/KeyFeature"

const AdditionalFeatures = () => {
  return (
    <section className=" w-full">
      <ContentWrapper className="flex-col">
        <div className="grid lg:grid-cols-3 gap-4 w-full py-20 px-8 lg:px-0">
          <KeyFeature
            className="mb-8 lg:mb-0"
            icon={<PiggyBankIcon height={60} width={60} />}
            title="Utilise Off-Peak Power"
          >
            In-slab heating systems are the perfect companion to off-peak power usage. Use the electricity 
            when it&apos;s cheapest and disapate heat throughout the day.
          </KeyFeature>

          <KeyFeature
            className="mb-8 lg:mb-0"
            icon={<SpannerIcon height={60} width={60} />}
            title="Maintenance Free"
          >
            Livella&apos;s unique electric in-slab heating has no hidden costs. 
            Unlike hydronic systems it requires no maintenance, servicing, boilers, pumps or valves.
          </KeyFeature>

          <KeyFeature
            icon={<HeatIcon height={60} width={60} />}
            title="Commercial Use"
          >
            Fixed to concrete reinforcement the tough and reliable cables are engineered 
            for sustained use. Suitable for commercial spaces and homes.
          </KeyFeature>
        </div>

        <div className="border-b flex flex-col lg:flex-row mt-4 px-8 pb-16 w-full">
          <ul className="w-full lg:w-1/2">
            <ListItem>Low/Non-Existant risk of accidental damage.</ListItem>
            <ListItem>Suitable for Cold Rooms, Veterinary Facilities, Disability Facilities and Snow Melt.</ListItem>
            <ListItem>Permanent in-slab solutions suit any slab size or unique layout.</ListItem>
            <ListItem>Perfect for Polished Concrete Finishes.</ListItem>
            <ListItem>Reliable and affordable for peak performance in new projects and renovations.</ListItem>
          </ul>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default AdditionalFeatures
