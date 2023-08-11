import { FaTruck } from "react-icons/fa"
import { BsBox, BsClock, BsTruck } from "react-icons/bs"

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTag from "@/components/HeadingTag"
import HeadingTwo from "@/components/HeadingTwo"

import Product from './Product'

const Products = () => {
  return (
    <section className="w-full p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo>
            Our Products
          </HeadingTwo>

          <p className="mt-8">
            Next day dispatch on products ordered through Trade installers 
            and stockists across Australia make Livella the best choice 
            in heating solutions for last minute renovations and well planned project builds.
          </p>

          <div className="flex flex-col mt-8">
            <Product className="border-b">
              Programmable Smart Thermostats
            </Product>

            <Product className="border-b">
              Faceplates to Match your Styling
            </Product>

            <Product className="border-b">
              Radiant Heating Solutions
            </Product>

            <Product className="border-b">
              Mirror Demisters
            </Product>
            
            <Product className="border-b">
              Temperature Sensors
            </Product>
            
            <Product>
              Fault & Damage Alarm
            </Product>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex flex-col items-center">
              <div
                className="border flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                <BsTruck style={{ fontSize: 24 }} />
              </div>

              <span className="text-sm mt-4">Free Shipping*</span>
            </div>

            <div className="flex flex-col items-center mx-12">
              <div
                className="border flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                <BsClock style={{ fontSize: 24 }} />
              </div>

              <span className="text-sm mt-4">Next-day Dispatch</span>
            </div>

            <div className="flex flex-col items-center">
              <div
                className="border flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                <BsBox style={{ fontSize: 24 }} />
              </div>

              <span className="text-sm mt-4">Qty Guarantee</span>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default Products
