import { Fragment } from "react";

import ContactGroup from "@/components/ContactGroup"
import ContentWrapper from "@/components/ContentWrapper"
import HeadingTwo from "@/components/HeadingTwo"
import HeadingThree from "@/components/HeadingThree"

import type { GroupedContacts } from "@/utils/groupContactsByTypeAndLocation"

type SuppliersProps = {
  supplier: GroupedContacts['supplier'],
}

const Suppliers = (props: SuppliersProps) => {
  const { supplier } = props

  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Product Suppliers
          </HeadingTwo>

          <p className="mt-8">
            Livella Underfloor Heating offers top-quality underfloor heating solutions with product suppliers conveniently located across all states in Australia. Whether you&apos;re in New South Wales, Victoria, Queensland, South Australia, Western Australia, Tasmania, or the Northern Territory, Livella has you covered. 
          </p>

          <p className="mt-8">
            Our commitment to customer satisfaction extends to making it easy for you to access our products. You can have your desired underfloor heating system shipped directly to your doorstep, hassle-free, or visit one of our authorized stores near you to view the products in person. 
          </p>

          <p className="mt-8">
            With Livella, experiencing the warmth and comfort of underfloor heating in your home has never been more accessible. Unlock the ultimate in heating comfort and efficiency with Livella Underfloor Heating.
          </p>

          {Object.values(supplier?.countries).map((country) => {
            return (
              <Fragment key={country.key}>
                <HeadingThree key={country.countryCode} className="mt-12">
                  {country.title}
                </HeadingThree>

                {Object.values(country.states).map((state) => {
                  return (
                    <ContactGroup
                      key={state.stateCode}
                      title={state.stateCode}
                      subtitle={`Livella product suppliers in ${state.title}`}
                    >
                      {state.contacts.map((contact) => {
                        return (
                          <ContactGroup.Contact
                            contact={contact}
                            key={contact.sys.id}
                          />
                        )
                      })}
                    </ContactGroup>
                  )
                })}
              </Fragment>
            )
          })}

        </div>
      </ContentWrapper>
    </section>
  )
}

export default Suppliers
