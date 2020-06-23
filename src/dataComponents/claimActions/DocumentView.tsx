import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
// import { DocumentView_data$key } from './__generated__/DocumentView_data.graphql'

import { IconButton } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'

// const supportedFormats = ['jpg', 'png', 'pdf']

// type DocumentViewProps = {
//   data: DocumentView_data$key | null
// }
const DocumentView: React.FC<any> = props => {
  const claimDocumentsData = useFragment(
    graphql`
      fragment DocumentView_claimDocumentsData on ClaimDocument {
        url
      }
    `,
    props.claimDocumentsData
  )

  const LossAdjusterData = useFragment(
    graphql`
      fragment DocumentView_LossAdjusterData on ClaimLossAdjusterDocument {
        url
      }
    `,
    props.LossAdjusterData
  )

  // const url = data?.url ?? ''
  // const isSupported = React.useMemo(() => {
  //   const ext = url.substring(url.lastIndexOf('.') + 1, url.length).toLowerCase()
  //   return supportedFormats.includes(ext)
  // }, [url])

  return (
    <IconButton
      component="a"
      target="_blank"
      href={
        claimDocumentsData
          ? claimDocumentsData?.url
          : LossAdjusterData && LossAdjusterData?.url
      }
    >
      <DescriptionIcon />
    </IconButton>
  )
}
export default DocumentView
