import { twMerge } from "tailwind-merge"

import DownloadIcon from "@/components/Icons/Download"

type DownloadableResourceProps = {
  className?: string,
  fileUrl: string,
  title: string,
}

const DownloadableResource = (props: DownloadableResourceProps) => {
  const { className, fileUrl, title } = props

  return (
    <div className={twMerge("flex flex-col w-full", className)}>
      <div
        className={`
          flex
          items-center
          justify-between
          font-bold
          w-full
          py-4
        `}
      >
        <span className="w-full">
          {title}
        </span>

        <a className="text-lg" href={fileUrl}>
          <DownloadIcon height={18} width={18} />
        </a>
      </div>
    </div>
  )
}

export default DownloadableResource
