import { Fragment } from "react"

import ContactGroup from "@/components/ContactGroup"
import ContentWrapper from "@/components/ContentWrapper"
import HeadingThree from "@/components/HeadingThree"
import HeadingTwo from "@/components/HeadingTwo"

import type { GroupedContacts } from "@/utils/groupContactsByTypeAndLocation"

type InstallersProps = {
  installer: GroupedContacts['installer'],
}

const Installers = (props: InstallersProps) => {
  const { installer } = props

  return (
    <section className="w-full p-8 lg:p-16 lg:pt-4">
      <ContentWrapper>
        <div className="flex flex-col w-full">
          <HeadingTwo className="mt-0">
            Product Installers
          </HeadingTwo>

          <p className="mt-8">
            Livella has a high standard for product installers and services. We&apos;ll recommend someone close to you based on details provided in your quote request. We stand by our product and our installers completely and their work is backed by our factory warranty.
          </p>

          {Object.values(installer?.countries).map((country) => {
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
                      subtitle={`Livella product installers in ${state.title}`}
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

export default Installers
