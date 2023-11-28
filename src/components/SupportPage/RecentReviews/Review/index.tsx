import { FaStar } from "react-icons/fa"

import HeadingFour from "@/components/HeadingFour"

type ReviewProps = {
  children: React.ReactNode,
  title: string,
}

const Review = (props: ReviewProps) => {
  const { children, title } = props

  return (
    <div className="flex flex-col border-b pb-8">
      <HeadingFour>{title}</HeadingFour>

      <p className="mt-2">
        {children}
      </p>

      <div className="flex mt-4">
        <FaStar style={{ marginRight: 8 }} />
        <FaStar style={{ marginRight: 8 }} />
        <FaStar style={{ marginRight: 8 }} />
        <FaStar style={{ marginRight: 8 }} />
        <FaStar />
      </div>
    </div>
  )
}

export default Review
