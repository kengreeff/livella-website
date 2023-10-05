import { HiOutlineMail, HiPhone } from "react-icons/hi"

type NeedAnythingElseProps = {
  title?: string,
}

const NeedAnythingElse = (props: NeedAnythingElseProps) => {
  const { title = 'Need anything else?' } = props

  return (
    <div className="text-center mt-8">
      <span>
        {title}
      </span>

      <div className="flex flex-col lg:flex-row justify-center border mt-4 p-8">
        <span className="flex items-center">
          <HiPhone style={{ marginRight: 8 }} /> 1300 350 607 (AU)
        </span>
        
        <span className="flex items-center lg:mx-8">
          <HiPhone style={{ marginRight: 8 }} /> 1300 350 607 (NZ)
        </span>

        <a className="flex items-center" href="/contact">
          <HiOutlineMail style={{ marginRight: 8 }} /> Email Us
        </a>
      </div>
    </div>
  )
}

export default NeedAnythingElse
