import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

const Questions = () => {
  return (
    <section className="w-full p-16">
      <ContentWrapper>
        <div className="flex flex-col bg-black w-full p-16">
          <HeadingTag colorScheme="white">Ready to turn up the heat?</HeadingTag>

          <HeadingTwo className="text-white mt-8">
            Homes worth living in,<br />
            Start with Livella
          </HeadingTwo>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Questions
