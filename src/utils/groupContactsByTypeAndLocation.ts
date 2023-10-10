import { Contact } from "@/app/installers/page"

type GroupKey = 'installer' | 'supplier'

export type GroupedContacts = {
  [key: string]: {
    contacts: Contact[],
    countries: {
      [key: string]: {
        countryCode: string,
        states: {
          [key: string]: {
            contacts: Contact[],
            stateCode: string,
            title: string,
          },
        },
        title: string,
      },
    },
    state: string,
    type: GroupKey,
  }
}

function groupContactsByTypeAndLocation(contacts: Contact[]){
  const groupedContacts = contacts.reduce((acc, contact) => {
    const contactTypes = contact.contactTypeCollection.items.map(item => item.shortcode)
    const countryCode = contact.country?.countryCode
    const stateCode = contact.state?.shortcode

    contactTypes.forEach(type => {
      // Setup Type group e.g. installer/supplier
      if (!acc[type]){
        acc[type] = {
          countries: {},
          type,
        }
      }

      // Setup Country group
      if (!acc[type].countries[countryCode]){
        acc[type].countries[countryCode] = {
          countryCode: countryCode,
          title: contact.country?.title,
          states: {},
        }
      }

      // Setup State group
      if (!acc[type].countries[countryCode].states[stateCode]){
        acc[type].countries[countryCode].states[stateCode] = {
          contacts: [],
          stateCode: stateCode,
          title: contact.state?.title,
        }
      }

      // Add Contact
      acc[type].countries[countryCode].states[stateCode].contacts.push(contact)
    })

    return acc
  }, {} as GroupedContacts)

  return groupedContacts
}

export default groupContactsByTypeAndLocation
