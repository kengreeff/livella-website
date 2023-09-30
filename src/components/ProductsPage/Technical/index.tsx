import NextImage from 'next/image'

import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import MockupImage from './assets/mockup.jpeg'
import WiringImage from './assets/wiring.png'

const Technical = () => {
  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0 lg:mt-20">
            Technical Specifications
          </HeadingTwo>

          <p className="mt-8">
            Looking for an instruction manual or installation details or technical specifications? 
            We&apos;ve got a whole host of resources for trade installers and customers. 
            Whether you&apos;ve lost the instruction manual or you&apos;re installing for the first time. 
            Download them here.
          </p>

          <div className="flex flex-col lg:flex-row w-full mt-16">
            <div className="flex flex-col lg:w-1/3">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <NextImage
                  fill
                  src={WiringImage.src}
                  alt="Wiring Diagram"
                  style={{ objectFit: 'contain', objectPosition: 'top' }}
                />
              </div>
            </div>
            
            <div className="flex flex-col mt-8 lg:w-2/3 lg:ml-8 lg:mt-0">
              <HeadingTag colorScheme="black">LU-AP5000 Technical Specs</HeadingTag>

              <table className="mt-8 border-b w-full">
                <tbody>
                  <tr>
                    <td className="py-2 w-3/5">Voltage</td>
                    <td className="py-2 w-2/5 text-right">230-240V</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-3/5">Load (Heating)</td>
                    <td className="py-2 w-2/5 text-right">16A</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-3/5">Load (Appliance)</td>
                    <td className="py-2 w-2/5 text-right">3A</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-3/5">Dimensions</td>
                    <td className="py-2 w-2/5 text-right">130mm x 90mm</td>
                  </tr>
                  <tr>
                    <td className="py-2 w-3/5">Standards</td>
                    <td className="py-2 w-2/5 text-right">IEC60730</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-4 w-full border-b">
            <div className="flex flex-col lg:flex-row items-center justify-between pb-4 w-full">
              <span>Thermostat Controller Instructions</span>

              <Button buttonStyle="secondaryBlack" className="mt-2 lg:mt-0 px-4 py-2">
                Download Instructions
              </Button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Technical
