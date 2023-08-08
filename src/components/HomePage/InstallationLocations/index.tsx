import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

const InstallationLocations = () => {
  return (
    <section className="w-full bg-black-60 p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTag colorScheme="white">What makes livella unique?</HeadingTag>

          <HeadingTwo className="text-white">
            Install almost<br />
            anywhere
          </HeadingTwo>

          <hr className="border-white" />

          
        </div>
      </ContentWrapper>
    </section>
  )
}

export default InstallationLocations
