import { useState } from "react"

import Button from "@/components/Button"
import FieldLabel from "@/components/Forms/FieldLabel"
import FormRow from "@/components/Forms/FormRow"
import Input from "@/components/Forms/Input"
import Select from "@/components/Forms/Select"

import type { Room } from "@/hooks/useQuoteForm"

const defaultState = {
  floorCovering: '',
  installType: '',
  title: '',
}

type AddRoomProps = {
  callbacks: {
    addRoom: (room: Room) => void,
  },
}

const AddRoom = (props: AddRoomProps) => {
  const {
    callbacks: {
      addRoom,
    },
  } = props

  const [state, setState] = useState(defaultState)
  const { floorCovering, installType, title } = state

  return (
    <FormRow className="mb-0">
      <div className="w-full md:w-1/4 px-3">
        <FieldLabel htmlFor="title">* Room Name</FieldLabel>
        <Input
          id="title"
          onChange={(e) => {
            setState(prevState => {
              return {
                ...prevState,
                title: e.target.value
              }
            })
          }}
          value={title}
        />
      </div>

      <div className="w-full md:w-1/4 px-3">
        <FieldLabel htmlFor="floorCovering">* Floor Covering</FieldLabel>
        <Select
          id="floorCovering"
          onChange={(e) => {
            setState(prevState => {
              return {
                ...prevState,
                floorCovering: e.target.value
              }
            })
          }}
          value={floorCovering}
        >
          <option value="">Please Select...</option>
          <option value="Carpet">Carpet</option>
          <option value="Tile">Tile</option>
          <option value="Timber">Timber</option>
          <option value="Other">Other</option>
        </Select>
      </div>

      <div className="w-full md:w-1/4 px-3">
        <FieldLabel htmlFor="installType">* Type</FieldLabel>
        <Select
          id="installType"
          onChange={(e) => {
            setState(prevState => {
              return {
                ...prevState,
                installType: e.target.value
              }
            })
          }}
          value={installType}
        >
          <option value="">Please Select...</option>
          <option value="InSlab">In-Slab</option>
          <option value="OnSlab">On-Slab</option>
        </Select>
      </div>

      <div className="w-full md:w-1/4 px-3">
        <FieldLabel className="text-white" htmlFor="industry">Action</FieldLabel>
        <Button
          buttonStyle="secondaryBlack"
          className="inline-flex py-3 rounded-md w-full justify-center"
          onClick={() => {
            addRoom(state)
            setState(defaultState)
          }}
        >
          Add Room
        </Button>
      </div>
    </FormRow>
  )
}

export default AddRoom
