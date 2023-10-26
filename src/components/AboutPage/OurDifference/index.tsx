import { FaCheck } from 'react-icons/fa'

import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import ListItem from "@/components/ListItem"

const OurDifference = () => {
  return (
    <section className="w-full p-8 lg:p-16 lg:pt-4">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Our Difference
          </HeadingTwo>

          <p className="mt-8">
            <strong>Expertise:</strong> Our team consists of experts who understand the ins and outs of underfloor 
            heating systems. We are always ready to answer your questions and provide guidance on the best 
            solution for your needs.
          </p>
          
          <p className="mt-4">
            <strong>Quality Products:</strong> We offer a curated selection of top-of-the-line underfloor heating 
            systems and components, sourced from reputable manufacturers. Our products are built to last and 
            designed with your comfort in mind.
          </p>
          
          <p className="mt-4">
            <strong>Custom Solutions:</strong> Every space is unique, and we understand that. Whether you&apos;re 
            renovating an existing property or building a new one, we can tailor our underfloor heating 
            systems to suit your specific requirements.
          </p>
         
          <p className="mt-4">
            <strong>Energy Efficiency:</strong> We are committed to offering energy-efficient underfloor heating 
            solutions that not only save you money but also reduce your environmental impact. Livella&apos;s on-slab 
            systems warm quickly and are programmed to match your daily routine so energy is never wasted. And 
            in-slab systems generate heat during off-peak when power is cheapest.
          </p>

          <p className="mt-4">
            <strong>Exceptional Customer Service:</strong> Your satisfaction is our priority. We provide reliable 
            customer support and comprehensive installation guidance to ensure your underfloor heating system 
            performs flawlessly.
          </p>

          <p className="mt-4">
            <strong>Affordable Pricing:</strong> We believe that luxury shouldn&apos;t break the bank. Our 
            competitive pricing ensures that underfloor heating is accessible to a wide range of customers.
          </p>

          <p className="mt-8">
            Join us in embracing the warmth and comfort of underfloor heating. Explore our website to discover 
            our wide range of products, installation guides, and expert advice. Whether you&apos;re a homeowner, 
            contractor, or architect, Livella is your partner in creating the perfect indoor climate for your space.
          </p>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default OurDifference
