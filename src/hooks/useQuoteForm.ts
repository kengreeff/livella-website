import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import type { SingleValue } from "react-select"
import type { Dispatch, FormEvent, SetStateAction } from 'react'

import useUppy from '@/hooks/useUppy'

import type { AddressOption } from '../components/Forms/AddressAutocomplete/index'

type SetState = Dispatch<SetStateAction<DefaultState>>

export type Room = {
  key?: string,
  installType: string,
  floorCovering: string,
  title: string,
}

type DefaultState = {
  address: SingleValue<AddressOption> | null,
  attachmentIds?: string[],
  company?: string,
  email: string,
  error: string,
  firstName: string,
  industry: string,
  lastName: string,
  loading: boolean,
  phone: string,
  projectAddress: SingleValue<AddressOption> | null,
  projectType: string,
  requirements: string,
  rooms: Room[],
  success: boolean,
}

const submitForm = async (
  state: DefaultState,
  setState: SetState,
  onSuccess: VoidFunction,
) => {
  const {
    address,
    attachmentIds,
    company,
    email,
    firstName,
    industry,
    lastName,
    phone,
    projectAddress,
    projectType,
    requirements,
    rooms,
  } = state

  setState(prevState => {
    return {
      ...prevState,
      error: '',
      loading: true,
      success: false,
    }
  })

  const response = await fetch('/api/quoteRequest', {
    method: 'POST',
    body: JSON.stringify({
      address: address?.label,
      attachmentIds,
      company,
      email,
      firstName,
      industry,
      lastName,
      phone,
      projectAddress: projectAddress?.label,
      projectType,
      requirements,
      rooms,
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

  onSuccess()
}

const toggleRoom = (room: Room, state: DefaultState, setState: SetState) => {
  const { rooms } = state

  const roomIndex = rooms.findIndex(r => r.key === room.key)
  
  const updatedRooms = [...rooms]
  if (roomIndex === -1){
    updatedRooms.push({
      ...room,
      key: uuidv4(),
    })
  } else {
    updatedRooms.splice(roomIndex, 1)
  }

  setState(prevState => {
    return {
      ...prevState,
      rooms: updatedRooms,
    }
  })
}

const defaultState: DefaultState = {
  address: null,
  attachmentIds: [],
  company: '',
  email: '',
  error: '',
  firstName: '',
  industry: 'Homeowner',
  lastName: '',
  loading: false,
  phone: '',
  projectAddress: '',
  projectType: 'Renovation',
  requirements: 'Supply',
  rooms: [],
  success: false,
}

type UseQuoteFormOptions = {
  callbacks: {
    onSuccess: VoidFunction,
  }
}

function useQuoteForm(options: UseQuoteFormOptions) {
  const {
    callbacks: {
      onSuccess,
    },
  } = options

  const [state, setState] = useState(defaultState)

  const uppy = useUppy({
    callbacks: {
      uploadSuccess: (response) => {
        const { data } = response
        if (data?.success && data.asset?.sys?.id) {
          // Add the uploaded asset to the list of attachmentIds
          setState(prevState => {
            return {
              ...prevState,
              attachmentIds: [
                ...prevState.attachmentIds || [],
                data.asset.sys.id,
              ],
            }
          })
        }
      },
    },
  })

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
        submitForm(state, setState, onSuccess)
      },
      toogleRoom: (room: Room) => toggleRoom(room, state, setState),
    },
    state,
    uppy,
  }
}

export default useQuoteForm
