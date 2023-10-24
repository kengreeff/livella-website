import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import type { SingleValue, ActionMeta } from "react-select"

export type AddressOption = {
	label: string,
	value: {
		description: string,
	}
}

type AddressAutocompleteProps = {
  id: string,
  onChange: (newValue: SingleValue<AddressOption>, actionMeta: ActionMeta<AddressOption>) => void,
  required?: boolean,
  value?: SingleValue<AddressOption>,
}

const AddressAutocomplete = (props: AddressAutocompleteProps) => {
  const { onChange, required, value } = props

  return (
    <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      autocompletionRequest={{
        componentRestrictions: {
          country: ['au', 'nz'],
        }
      }}
      debounce={300}
      minLengthAutocomplete={3}
      selectProps={{
        classNames: {
          control: () => `
            w-full
            bg-gray-50
            text-gray-700
            border
            border-gray-200
            py-1
            px-1
            mb-3
            focus:outline-none
            focus:bg-white
          `,
        },
        id: 'address',
        isClearable: true,
        required,
        value,
        onChange,
      }}
    />
  )
}

export default AddressAutocomplete
