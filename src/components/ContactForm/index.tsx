"use client"

import useContactForm from "@/hooks/useContactForm"

import Button from "@/components/Button"
import ContentWrapper from "@/components/ContentWrapper"
import FieldLabel from "@/components/Forms/FieldLabel"
import FormRow from "@/components/Forms/FormRow"
import HeadingThree from "@/components/HeadingThree"
import HeadingTwo from "@/components/HeadingTwo"
import Input from "@/components/Forms/Input"
import Select from "@/components/Forms/Select"

const ContactForm = () => {
  const contactFormPayload = useContactForm()

  const {
    callbacks: {
      setState,
      submitForm,
    },
    state: {
      email,
      error,
      firstName,
      industry,
      lastName,
      loading,
      phone,
      success,
    },
  } = contactFormPayload

  if (success) {
    return (
      <section className="w-full p-8 lg:p-16">
        <ContentWrapper>
          <div className="w-full">
            <HeadingTwo>
              Thank you for reaching out!
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
    <section className="w-full p-8 lg:p-16" id="contactUs">
      <ContentWrapper className="flex-col">
        <HeadingTwo className="mt-0 mb-8">
          Contact Us
        </HeadingTwo>

        <HeadingThree className="mt-0 mb-8">
          Send Us a Message
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
          </FormRow>

          <FormRow>
            <div className="w-full px-3">
              <FieldLabel htmlFor="message">* Message</FieldLabel>
              <textarea
                className={`
                  appearance-none
                  block
                  w-full
                  bg-gray-50
                  text-gray-700
                  border
                  border-gray-200
                  rounded
                  py-3
                  px-4
                  mb-3
                  leading-tight
                  focus:outline-none
                focus:bg-white
                `}
                id="message"
                onChange={(e) => {
                  setState({ message: e.target.value })
                }}
                required
                rows={10}
              />
            </div>
          </FormRow>

          <FormRow className="mt-8">
            <Button
              as="button"
              buttonStyle={loading ? 'secondaryBlack' : 'primary'}
              disabled={loading}
              type="submit"
            >
              {loading ? 'Sending...' : 'Submit Message'}
            </Button>
          </FormRow>
        </form>
      </ContentWrapper>
    </section>
  )
}

export default ContactForm
