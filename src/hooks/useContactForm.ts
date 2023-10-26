import { useState } from 'react'

import type { Dispatch, FormEvent, SetStateAction } from 'react'

type SetState = Dispatch<SetStateAction<DefaultState>>

type DefaultState = {
  email: string,
  error: string,
  firstName: string,
  industry: string,
  lastName: string,
  loading: boolean,
  message: string,
  phone: string,
  success: boolean,
}

const submitForm = async (
  state: DefaultState,
  setState: SetState,
) => {
  const {
    email,
    firstName,
    industry,
    lastName,
    message,
    phone,
  } = state

  setState(prevState => {
    return {
      ...prevState,
      error: '',
      loading: true,
      success: false,
    }
  })

  const response = await fetch('/api/contactRequest', {
    method: 'POST',
    body: JSON.stringify({
      email,
      firstName,
      industry,
      lastName,
      message,
      phone,
    }),
  })

  const data = await response.json()
  const { error, success } = data

  setState(prevState => {
    return {
      ...prevState,
      error: error || '',
      loading: false,
      success: success,
    }
  })
}

const defaultState: DefaultState = {
  email: '',
  error: '',
  firstName: '',
  industry: 'Homeowner',
  lastName: '',
  loading: false,
  message: '',
  phone: '',
  success: false,
}

function useQuoteForm() {
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
      submitForm: (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submitForm(state, setState)
      },
    },
    state,
  }
}

export default useQuoteForm
