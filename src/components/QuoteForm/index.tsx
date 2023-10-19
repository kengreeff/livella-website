import ContentWrapper from "@/components/ContentWrapper"
import FieldLabel from "@/components/Forms/FieldLabel"
import Input from "@/components/Forms/Input"

type QuoteFormProps = {
  children: React.ReactNode,
}

const QuoteForm = (props: QuoteFormProps) => {
  const { children } = props

  return (
    <section className="w-full p-8 lg:p-16">
      <ContentWrapper>
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="grid-first-name">First Name</FieldLabel>
              <Input errorMessage="Please fill out this field." id="grid-first-name" />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <FieldLabel htmlFor="grid-last-name">Last Name</FieldLabel>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <FieldLabel htmlFor="grid-password">Password</FieldLabel>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="grid-city">City</FieldLabel>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="grid-state">State</FieldLabel>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FieldLabel htmlFor="grid-zip">Zip</FieldLabel>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
            </div>
          </div>
        </form>
      </ContentWrapper>
    </section>
  )
}

export default QuoteForm
