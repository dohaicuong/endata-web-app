import React from 'react'
import Uppy from '@uppy/core'
import s3 from '@uppy/aws-s3'

import { COMPANION_ENDPOINT } from 'configs'

export default (options: any, companionUrl: string = COMPANION_ENDPOINT) => {
  const [uppy, setUppy] = React.useState<any>(null)
  const [files, setFiles] = React.useState<any[]>([])
  const [errors, setErrors] = React.useState<any[]>([])

  React.useEffect(() => {
    const client = Uppy(options).use(s3, { companionUrl })
    setUppy(client)
    // eslint-disable-next-line
  }, [])

  if (uppy)
    uppy.on('complete', (result: any) => {
      const { successful, failed } = result
      if (successful) {
        const success = successful.map(
          ({ name, extension, uploadURL: url, size }: any) => ({
            name,
            extension,
            url,
            size,
          })
        )
        setFiles([...files, ...success])
      }
      if (failed) {
        const fail = failed.map(({ error: message, response }: any) => {
          const status = response ? response.status : null
          return { message, status }
        })
        setErrors([...errors, ...fail])
      }
    })

  return {
    uppy,
    files,
    errors,
  }
}
