import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

const Mission = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Our Mission
          </HeadingTwo>

          <p className="mt-8">
            At the heart of our mission is your comfort. We believe that every home and commercial space deserves the 
            luxury of underfloor heating. Our goal is to provide you with the highest quality products and exceptional 
            service to make this a reality.
          </p>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Mission
