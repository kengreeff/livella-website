import useQuoteForm from "@/hooks/useQuoteForm"

import AddressAutocomplete from "@/components/Forms/AddressAutocomplete"
import ContentWrapper from "@/components/ContentWrapper"
import FieldLabel from "@/components/Forms/FieldLabel"
import FormRow from "@/components/Forms/FormRow"
import Input from "@/components/Forms/Input"

type QuoteFormProps = {
  children: React.ReactNode,
}

const QuoteForm = (props: QuoteFormProps) => {
  const { children } = props

  const quoteFormPayload = useQuoteForm()
  const {
    callbacks: {
      setState,
    },
    state: {
      address,
      email,
      firstName,
      industry,
      lastName,
      phone,
    },
  } = quoteFormPayload

  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <form className="w-full">
          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="industry">Industry</FieldLabel>
              <Input
                id="industry"
                onChange={(e) => {
                  setState({ industry: e.target.value })
                }}
                value={industry}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="firstName">First Name</FieldLabel>
              <Input
                id="firstName"
                onChange={(e) => {
                  setState({ firstName: e.target.value })
                }}
                value={firstName}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
              <Input
                id="lastName"
                onChange={(e) => {
                  setState({ lastName: e.target.value })
                }}
                value={lastName}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                onChange={(e) => {
                  setState({ email: e.target.value })
                }}
                value={email}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input
                id="phone"
                onChange={(e) => {
                  setState({ phone: e.target.value })
                }}
                value={phone}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full px-3">
              <FieldLabel htmlFor="address">Address</FieldLabel>
              <AddressAutocomplete
                id="address"
                onChange={(value) => {
                  setState({ address: value })
                }}
                value={address}
              />
            </div>
          </FormRow>
        </form>
      </ContentWrapper>
    </section>
  )
}

export default QuoteForm
