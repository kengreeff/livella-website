import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

const WhyChooseHeating = () => {
  return (
    <section className="w-full p-8 lg:p-16 lg:pt-4">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Why Choose Underfloor Heating?
          </HeadingTwo>

          <p className="mt-8">
            Underfloor heating is more than just a way to keep your toes warm on chilly mornings. 
            It&apos;s a modern, efficient, and stylish way to heat your home or workplace. By evenly 
            distributing heat from the floor up, you can say goodbye to cold spots and hello 
            to consistent warmth throughout your space.
          </p>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default WhyChooseHeating
