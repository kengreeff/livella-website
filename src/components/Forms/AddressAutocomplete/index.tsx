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
  value?: SingleValue<AddressOption>,
}

const AddressAutocomplete = (props: AddressAutocompleteProps) => {
  const { onChange, value } = props

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
        id: 'address',
        value,
        onChange,
      }}
    />
  )
}

export default AddressAutocomplete
