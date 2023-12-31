import { HiPhone } from "react-icons/hi"
import { FaCopyright, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import HeadingFour from "@/components/HeadingFour"

const Footer = () => {
  return (
    <section className="w-full bg-livella-light-tan">
      <div className="flex flex-col w-full">
        <ContentWrapper>
          <div className="flex flex-col lg:flex-row w-full px-8 lg:px-0 py-8 lg:py-16">
            <div className="flex flex-col lg:w-1/4 text-sm text-gray-600">
              <HeadingFour>About Us</HeadingFour>

              <p className="mt-4">
                Australian supplier for over 30 years of the best underfloor heating solution for shower spaces, 
                stairs and all common flooring configurations. Livella is 100% Australian-owned, family run 
                business selling, supplying and installing the easiest, fastest to install under floor radiant 
                heating available in the market.
              </p>

              <p className="mt-4">
                Customer satisfaction is of the utmost importance to us. We believe in the product we make and 
                back it 100% with phone and email support across the country. With convenient next day trade and 
                local stockists whether you’re a trade installer or renovating your home Livella is the best choice 
                for sustainably heating your home all year round.
              </p>

              <p className="mt-4">
                All our products are completely safe for children and pets, with failsafe devices and technology 
                with fault detection and automated thermostat designs providing complete control over your home 
                heating, energy efficiency and comfort.
              </p>

              <p className="mt-4">
                Livella is the solution to a cold winter night when you have to move barefoot through the house. 
                Our installers in Sydney, outer-sydney and wider new south wales, Melbourne and the surrounding 
                suburbs and qualified electricians installing Australia wide mean it’s easier than ever to get a 
                sustainable and affordable heating solution in your new build or renovation.
              </p>
            </div>

            <div className="flex flex-col text-sm text-gray-600 lg:ml-16">
              <HeadingFour>Customer Care</HeadingFour>

              <a className="mt-4" href="/contact">Contact Us</a>
              <p className="mt-2">Warranty</p>
              <p className="mt-2">Care & Maintenance</p>
              <p className="mt-2">How to Use the Thermostat</p>
              <a className="mt-2" href="/support">Frequently Asked Questions</a>
            </div>

            <div className="flex flex-col text-sm text-gray-600 lg:ml-16">
              <HeadingFour>Important Resources</HeadingFour>

              <a className="mt-4" href="/suppliers">Suppliers & Installers</a>
              <p className="mt-2">Australian Owned and Installed</p>
              <p className="mt-2">Documentation</p>
              <p className="mt-2">How to Use the Thermostat</p>
              <p className="mt-2">Trade Resources</p>
            </div>

            <div className="flex flex-col items-start text-sm text-gray-600 max-w-xs lg:ml-auto">
              <p className="mt-8">Sitemap</p>
              <p className="mt-2">Terms of Use</p>
              <p className="mt-2">Privacy Policy</p>
              <a className="mt-2" href="/contact">Contact Us</a>

              <div className="flex text-lg mt-8">
                <FaFacebook style={{ marginRight: 12 }} />
                <FaInstagram style={{ marginRight: 12 }} />
                <FaWhatsapp />
              </div>

              <p className="mt-8 w-full text-xs">
                Underfloor heating is more affordable than you think. Our support and installers 
                are some of the best in Australia. Request a quote and we&apos;ll send you a some more 
                information about the product alongside an estimate for your project.
              </p>

              <Button href="/contact" style={{ marginTop: 16 }} target="_self">
                Email Us
              </Button>
            </div>
          </div>
        </ContentWrapper>

        <div className="flex flex-col lg:flex-row w-full bg-livella-tan p-4 text-sm text-gray-500">
          <a href="https://www.kengreeff.com">Website by Initium Studio</a>

          <div className="flex flex-col lg:flex-row lg:mx-auto my-4 lg:my-0">
            <span className="flex lg:items-center">
              <HiPhone style={{ marginRight: 8 }} /> 1800 833 933 (AU)
            </span>
            
            <span className="flex lg:items-center lg:mx-8">
              <HiPhone style={{ marginRight: 8 }} /> 1800 833 933 (NZ)
            </span>

            <span className="flex lg:items-center">
              <FaCopyright style={{ marginRight: 8 }} /> Copyright Livella 2023
            </span>
          </div>

          <span>Proudly Australian</span>
        </div>
      </div>
    </section>
  )
}

export default Footer
