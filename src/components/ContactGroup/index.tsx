import HeadingTag from "@/components/HeadingTag"

import Contact from "./Contact"

type ContactGroupProps = {
  children: React.ReactNode,
  title: string,
  subtitle: string,
}

const ContactGroup = (props: ContactGroupProps) => {
  const { children, title, subtitle } = props

  return (
    <div className="border-b mt-8 pb-4">
      <div className="flex flex-col">
        <HeadingTag colorScheme="black">{title}</HeadingTag>
        <span className="text-gray-400">
          Livella product suppliers in {subtitle}
        </span>
      </div>

      {children}
    </div>
  )
}

ContactGroup.Contact = Contact

export default ContactGroup
