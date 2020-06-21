import React from 'react'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

import NoteAddIcon from '@material-ui/icons/NoteAdd'
import { useHistory } from 'react-router-dom'

const ClaimFloatActions = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { push } = useHistory()
  const handleAddClaim = () => {
    push('/add-claim')
    handleClose()
  }

  return (
    <SpeedDial
      ariaLabel="Claim List Actions"
      hidden={false}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
      style={{ position: 'absolute', bottom: 30, right: 30 }}
    >
      <SpeedDialAction
        icon={<NoteAddIcon />}
        tooltipTitle="Claim"
        tooltipOpen
        onClick={handleAddClaim}
      />
    </SpeedDial>
  )
}
export default ClaimFloatActions
