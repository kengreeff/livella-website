"use client";

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql, TypedDocumentNode } from "@apollo/client";

import groupContactsByTypeAndLocation from "@/utils/groupContactsByTypeAndLocation";

import BookFreeQuote from "@/components/BookFreeQuote";
import Footer from "@/components/Footer"
import Hero from "@/components/InstallersPage/Hero";
import Installers from "@/components/InstallersPage/Installers";
import MainNavigation from "@/components/MainNavigation"
import Suppliers from "@/components/InstallersPage/Suppliers";

export type ContactType = {
  shortcode: string,
  title: string,
}

export type Contact = {
  addressPostcode: string,
  addressStreet: string,
  addressSuburb: string,
  contactTypeCollection: {
    items: ContactType[],
  },
  country: {
    countryCode: string,
    title: string,
  },
  email?: string,
  phone?: string,
  state: {
    title: string,
    shortcode: string,
  },
  sys: {
    id: string,
  },
  title: string,
}

type ContactsData = {
  contactCollection: {
    items: Contact[],
  }
}

const GET_CONTACTS_QUERY: TypedDocumentNode<ContactsData> = gql`
  query GetContacts {
    contactCollection {
      items {
        addressPostcode
        addressStreet
        addressSuburb
        contactTypeCollection {
          items {
            shortcode
            title
          }
        }
        country {
          countryCode
          title
        }
        email
        phone
        state {
          title
          shortcode
        }
        sys {
          id
        }
        title
      }
    }
  }
`

function InstallersPage() {
  const { data } = useSuspenseQuery(GET_CONTACTS_QUERY)

  const groupedContacts = groupContactsByTypeAndLocation(data?.contactCollection?.items || [])
  console.log(groupedContacts)

  return (
    <main>
      <MainNavigation />

      <Hero />
      <Suppliers supplier={groupedContacts.supplier} />
      <Installers installer={groupedContacts.installer} />
      <BookFreeQuote />

      <Footer />
    </main>
  )
}

export default InstallersPage
