import type { Contact } from "@/app/suppliers/page"

const buildAddress = (contact: Contact) => {
  const { addressStreet, addressSuburb, addressPostcode } = contact

  let address = ''

  if (addressStreet){
    address += `${addressStreet}, `
  }

  if (addressSuburb){
    address += addressSuburb
  }

  if (addressPostcode){
    address += ` •  ${addressPostcode}`
  }

  return address
}

type ContactProps = {
  contact: Contact,
}

const Contact = (props: ContactProps) => {
  const { contact } = props

  return (
    <div className="flex flex-col lg:flex-row mt-4 full-width justify-between">
      <div className="flex flex-col">
        <span>
          {contact.title}
        </span>      
        
        <span className="text-gray-500">
          {contact.email}
        </span>      
      </div>

      <div className="flex flex-col lg:text-right">
        <span>
          {buildAddress(contact)}
        </span>      
        
        <span className="text-gray-500">
          {contact.phone}
        </span>      
      </div>
    </div>
  )
}

export default Contact
