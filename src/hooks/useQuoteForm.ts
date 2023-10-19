import { useState } from 'react'
import type { SingleValue } from "react-select"

import type { AddressOption } from '../components/Forms/AddressAutocomplete/index'

type DefaultState = {
	address: SingleValue<AddressOption> | null,
	email: string,
	firstName: string,
	lastName: string,
	phone: string,
}

const defaultState = {
	address: null,
	email: '',
	firstName: '',
	lastName: '',
	phone: '',
}

function useQuoteForm(){
	const [state, setState] = useState(defaultState)

	return {
		callbacks: {
			setState: (newState: Partial<DefaultState>) => {
				setState(prevState => {
					return {
						...prevState,
						...newState,
					}
				})
			},
		},
		state,
	}
}

export default useQuoteForm
