import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

const Technical = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0 lg:mt-20">
            Technical Specifications
          </HeadingTwo>

          <p className="mt-8">
            Next day dispatch on products ordered through Trade installers 
            and stockists across Australia make Livella the best choice 
            in heating solutions for last minute renovations and well planned project builds.
          </p>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Technical
