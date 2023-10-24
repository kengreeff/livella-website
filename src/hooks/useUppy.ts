import { useEffect, useState } from 'react'
import Uppy from '@uppy/core'
import XHR from '@uppy/xhr-upload'

interface InitializeOptions {
  callbacks?: {
    uploadSuccess?: (response) => void,
  },
  maxNumberOfFiles?: number,
  uppyOptions?: {
    id?: string,
    allowedFileTypes: string[],
  },
}

const initializeUppy = (options: InitializeOptions): Uppy => {
  const {
    callbacks,
    maxNumberOfFiles,
    uppyOptions,
  } = options || {}

  const { uploadSuccess } = callbacks || {}
  const { allowedFileTypes, id } = uppyOptions || {}

  const uppy = new Uppy({
    autoProceed: true,
    debug: false,
    id: id || 'uppy',
    restrictions: {
      maxNumberOfFiles: maxNumberOfFiles || 5,
      allowedFileTypes: allowedFileTypes || ['.heic', '.jpg', '.jpeg', '.pdf', '.png', '.webp'],
    },
    ...uppyOptions,
  })
    .use(XHR, {
      endpoint: '/api/fileUpload',
    })
    .on('upload-error', (file) => {
      uppy.removeFile(file?.id)
    })
    .on('upload-success', (file, response) => {
      if (uploadSuccess) {
        uploadSuccess({ data: response.body, file })
      }
    })

  return uppy
}

function useUppy(options: InitializeOptions, deps: string[] = []) {
  const [uppy, setUppy] = useState<Uppy | undefined>(undefined)

  useEffect(() => {
    setUppy(initializeUppy(options))

    return () => {
      if (uppy) {
        uppy.close()
        setUppy(undefined)
      }
    }
  }, [...deps])

  return uppy
}

export default useUppy
