import ContentWrapper from "@/components/ContentWrapper"

import Statistic from './Statistic'

const Statistics = () => {
  return (
    <section className="w-full">
      <ContentWrapper>
        <div className="border-b border-t  p-16 grid lg:grid-cols-4 gap-16 w-full">
          <Statistic title="Years of experience">
            30+
          </Statistic>

          <Statistic title="Warmed Homes">
            18k+
          </Statistic>

          <Statistic title="Another Stat">
            1300
          </Statistic>

          <Statistic title="Installers">
            14
          </Statistic>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Statistics
