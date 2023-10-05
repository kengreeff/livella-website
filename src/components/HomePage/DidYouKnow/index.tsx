import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

const DidYouKnow = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col bg-livella-tan p-8 lg:p-16">
          <HeadingTwo className="mt-0">
            Did you know?
          </HeadingTwo>

          <p className="mt-8">
            We&apos;re not happy until you are. And we&apos;re available via phone an email, whether 
            you&apos;re having a problem with the unit or simply forgot how to program the thermostat. 
            Livella prides itself on the excellent reputation build from 30 years in the 
            industry helping our trades and customers.
          </p>

          <p className="mt-4">
            You can call us any time on 1300 350 607 (AU) or 0800 432 892 (NZ) or 
            if you&apos;d prefer to email us below.
          </p>

          <p className="mt-4 font-bold">
            Or read through our comprehensive FAQ/Troubleshooting Guide
          </p>

          <div className="flex flex-col lg:flex-row justify-start mt-8">
            <Button href="/contact" target="_self">Email Us</Button>

            <Button buttonStyle="secondaryBlack" className="mt-2 lg:mt-0 lg:ml-2">
              1300 350 607
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default DidYouKnow
