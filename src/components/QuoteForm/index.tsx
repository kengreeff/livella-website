import { scroller } from 'react-scroll'

import useQuoteForm from "@/hooks/useQuoteForm"

import AddressAutocomplete from "@/components/Forms/AddressAutocomplete"
import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import FieldLabel from "@/components/Forms/FieldLabel"
import FileUpload from "@/components/Forms/FileUpload"
import FormRow from "@/components/Forms/FormRow"
import HeadingThree from "@/components/HeadingThree"
import HeadingTwo from "@/components/HeadingTwo"
import Input from "@/components/Forms/Input"
import Select from "@/components/Forms/Select"

import AddRoom from './AddRoom'
import Room from './Room'

type QuoteFormProps = {
  children: React.ReactNode,
}

const QuoteForm = (props: QuoteFormProps) => {
  const { children } = props

  const quoteFormPayload = useQuoteForm({
    callbacks: {
      onSuccess: () => scroller.scrollTo('quoteRequest', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      }),
    }
  })

  const {
    callbacks: {
      setState,
      submitForm,
      toogleRoom,
    },
    state: {
      address,
      company,
      email,
      error,
      firstName,
      industry,
      lastName,
      loading,
      phone,
      projectAddress,
      projectType,
      requirements,
      rooms,
      success,
    },
    uppy,
  } = quoteFormPayload

  if (success) {
    return (
      <section className="w-full p-8 lg:p-16">
        <ContentWrapper>
          <div className="w-full">
            <HeadingTwo>
              Thank you for your quote request!
            </HeadingTwo>

            <p className="my-4">
              We will be in touch shortly.
            </p>
          </div>
        </ContentWrapper>
      </section>
    )
  }

  return (
    <section className="w-full p-8 lg:p-16" id="quoteRequest">
      <ContentWrapper className="flex-col">
        <HeadingTwo className="mt-0 mb-8">
          Quote Request
        </HeadingTwo>

        <HeadingThree className="mt-0 mb-8">
          Contact Details
        </HeadingThree>

        <form className="w-full" onSubmit={submitForm}>
          {!!error && (
            <FormRow>
              <div className="w-full p-4 bg-livella-red text-white rounded-xl">
                {error}
              </div>
            </FormRow>
          )}

          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="firstName">* First Name</FieldLabel>
              <Input
                id="firstName"
                onChange={(e) => {
                  setState({ firstName: e.target.value })
                }}
                required
                value={firstName}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="lastName">* Last Name</FieldLabel>
              <Input
                id="lastName"
                onChange={(e) => {
                  setState({ lastName: e.target.value })
                }}
                required
                value={lastName}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="email">* Email</FieldLabel>
              <Input
                id="email"
                onChange={(e) => {
                  setState({ email: e.target.value })
                }}
                required
                value={email}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="phone">* Phone</FieldLabel>
              <Input
                id="phone"
                onChange={(e) => {
                  setState({ phone: e.target.value })
                }}
                required
                value={phone}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full px-3">
              <FieldLabel htmlFor="address">* Address</FieldLabel>
              <AddressAutocomplete
                id="address"
                onChange={(value) => {
                  setState({
                    address: value,
                    projectAddress: value,
                  })
                }}
                required
                value={address}
              />
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="industry">* Industry</FieldLabel>
              <Select
                id="industry"
                onChange={(e) => {
                  setState({ industry: e.target.value })
                }}
                required
                value={industry}
              >
                <option value="">Please Select...</option>
                <option value="Architect">Architect</option>
                <option value="Builder">Builder</option>
                <option value="Developer">Developer</option>
                <option value="Electrician">Electrician</option>
                <option value="Flooring">Flooring</option>
                <option value="Homeowner">Homeowner</option>
                <option value="Other">Other</option>
              </Select>
            </div>

            {industry !== 'Homeowner' && (
              <div className="w-full md:w-1/2 px-3">
                <FieldLabel htmlFor="company">Company</FieldLabel>
                <Input
                  id="company"
                  onChange={(e) => {
                    setState({ company: e.target.value })
                  }}
                  required
                  value={company}
                />
              </div>
            )}
          </FormRow>

          <HeadingThree className="mt-0 mb-8">
            Project Details
          </HeadingThree>

          <FormRow>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="projectType">* Project Type</FieldLabel>
              <Select
                id="projectType"
                onChange={(e) => {
                  setState({ projectType: e.target.value })
                }}
                required
                value={projectType}
              >
                <option value="">Please Select...</option>
                <option value="NewProject">New Project</option>
                <option value="Renovation">Renovation</option>
              </Select>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="requirements">* Requirements</FieldLabel>
              <Select
                id="requirements"
                onChange={(e) => {
                  setState({ requirements: e.target.value })
                }}
                required
                value={requirements}
              >
                <option value="">Please Select...</option>
                <option value="Supply">Supply</option>
                <option value="SupplyInstall">Supply & Install</option>
              </Select>
            </div>
          </FormRow>

          <FormRow>
            <div className="w-full px-3">
              <FieldLabel htmlFor="projectAddress">* Project Address</FieldLabel>
              <AddressAutocomplete
                id="projectAddress"
                onChange={(value) => {
                  setState({ projectAddress: value })
                }}
                required
                value={projectAddress}
              />
            </div>
          </FormRow>

          {!!uppy && (
            <FormRow>
              <div className="w-full px-3">
                <FieldLabel htmlFor="attachments">* Floor Plans</FieldLabel>
                <FileUpload uppy={uppy} />
              </div>
            </FormRow>
          )}

          <HeadingThree className="mb-8">
            Room Schedule
          </HeadingThree>

          <AddRoom
            callbacks={{
              addRoom: (room) => toogleRoom(room),
            }}
          />

          {!!rooms.length && (
            <div>
              {rooms.map((room) => (
                <Room
                  callbacks={{
                    removeRoom: (room) => toogleRoom(room),
                  }}
                  key={room.key}
                  room={room}
                />
              ))}
            </div>
          )}

          <FormRow className="mt-8">
            <Button
              as="button"
              buttonStyle={loading ? 'secondaryBlack' : 'primary'}
              disabled={loading}
              type="submit"
            >
              {loading ? 'Sending...' : 'Submit Quote Request'}
            </Button>
          </FormRow>
        </form>
      </ContentWrapper>
    </section>
  )
}

export default QuoteForm
