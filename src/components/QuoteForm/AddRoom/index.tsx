import Button from "@/components/Button"
import FieldLabel from "@/components/Forms/FieldLabel"
import FormRow from "@/components/Forms/FormRow"
import Input from "@/components/Forms/Input"
import Select from "@/components/Forms/Select"

type AddRoomProps = {
  children: React.ReactNode,
}

const AddRoom = (props: AddRoomProps) => {
  const { children } = props

  return (
    <FormRow>
      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <FieldLabel htmlFor="industry">* Room Name</FieldLabel>
        <Input
          id="company"
          // onChange={(e) => {
          //   setState({ company: e.target.value })
          // }}
          required
          // value={company}
        />
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <FieldLabel htmlFor="industry">* Floor Covering</FieldLabel>
        <Select
          id="projectType"
          // onChange={(e) => {
          //   setState({ projectType: e.target.value })
          // }}
          required
          // value={projectType}
        >
          <option value="">Please Select...</option>
          <option value="Carpet">Carpet</option>
          <option value="Tile">Tile</option>
          <option value="Timber">Timber</option>
          <option value="Other">Other</option>
        </Select>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <FieldLabel htmlFor="industry">* Type</FieldLabel>
        <Select
          id="projectType"
          // onChange={(e) => {
          //   setState({ projectType: e.target.value })
          // }}
          required
          // value={projectType}
        >
          <option value="">Please Select...</option>
          <option value="InSlab">In-Slab</option>
          <option value="OnSlab">On-Slab</option>
        </Select>
      </div>

      <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <FieldLabel className="text-white" htmlFor="industry">Action</FieldLabel>
        <Button buttonStyle="secondaryBlack" className="inline-flex py-3 rounded-md w-full justify-center">
          Add Room
        </Button>
      </div>
    </FormRow>
  )
}

export default AddRoom
