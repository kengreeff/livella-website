import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import NeedAnythingElse from "@/components/NeedAnythingElse"

const StillHaveQuestions = () => {
  return (
    <section className="w-full p-8 lg:p-8">
      <ContentWrapper className="flex flex-col">
        <div className="flex flex-col bg-livella-tan p-8 lg:p-16">
          <HeadingTwo className="mt-0">
            Still Have Questions?
          </HeadingTwo>

          <p className="mt-8">
            If there&apos;s anything you&apos;re not clear on, whether that&apos;s related to a new project or 
            existing product please don&apos;t hesitate to get in touch with the Livella team today.
          </p>

          <p className="mt-4">
            You can call us any time on 1300 350 607 (AU) or 0800 432 892 (NZ) or if you prefer, email us below.
          </p>

          <div className="flex flex-col lg:flex-row justify-start mt-8">
            <Button href="/contact" target="_self">Email Us</Button>

            <Button buttonStyle="secondaryBlack" className="mt-2 lg:mt-0 lg:ml-2">
              1300 350 607
            </Button>
          </div>
        </div>

        <NeedAnythingElse title="Help is on hand. Get in touch today." />
      </ContentWrapper>
    </section>
  )
}

export default StillHaveQuestions
