import React from 'react'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

type DocumentDeleteProps = {
  data: any
}
const DocumentDelete: React.FC<DocumentDeleteProps> = props => {
  return (
    <IconButton>
      <DeleteIcon />
    </IconButton>
  )
}
export default DocumentDelete
