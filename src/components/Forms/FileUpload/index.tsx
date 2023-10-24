import { Dashboard } from '@uppy/react'

import type { Uppy } from '@uppy/core'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'

type FileUploadProps = {
  uppy: Uppy,
}

const FileUpload = (props: FileUploadProps) => {
  const { uppy } = props

  if (!uppy) {
    return null
  }

  return (
    <Dashboard
      className="w-full"
      uppy={uppy}
      height={300}
      width="100%"
    />
  )
}

export default FileUpload
