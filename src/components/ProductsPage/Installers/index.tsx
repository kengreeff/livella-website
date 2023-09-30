import { BsTruck, BsShop, BsWrenchAdjustable } from "react-icons/bs"

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"

const Installers = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0 lg:mt-20">
            Our Installers & Suppliers
          </HeadingTwo>

          <p className="mt-8">
            Livella installs and supplies our products right across Australia and New Zealand. 
            With Trade Store partners in physical locations and fast next day dispatch on online orders. 
            You can trust our installers to be well trained and efficient at installing our products and 
            the quick access to parts and materials means it&apos;s not too late to add underfloor heating 
            to your next project.
          </p>

          <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center">
              <div
                className="border flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                <BsWrenchAdjustable style={{ fontSize: 24 }} />
              </div>

              <span className="text-sm text-center mt-4">Find an Installer</span>
            </div>

            <div className="flex flex-col items-center mx-12">
              <div
                className="border flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                <BsShop style={{ fontSize: 24 }} />
              </div>

              <span className="text-sm text-center mt-4">Find them In Store</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="border flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                <BsTruck style={{ fontSize: 24 }} />
              </div>

              <span className="text-sm text-center mt-4">Order Online</span>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Installers
