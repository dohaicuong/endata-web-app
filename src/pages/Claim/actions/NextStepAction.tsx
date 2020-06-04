import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

export type NextStepActions = {
  handleOpen: () => void
  handleClose: () => void
}
export type NextStepActionProps = {
  open: boolean
  onClose: () => void
}
const NextStepAction: React.FC<NextStepActionProps> = ({ open, onClose }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Next step dialog</DialogTitle>
    </Dialog>
  )
}
export default NextStepAction

export type useNextStepActionProps = {
  defaultOpen?: boolean
}
type useNextStepActionReturn = [boolean, () => void, () => void]
export const useNextStepAction = ({
  defaultOpen = false,
}: useNextStepActionProps): useNextStepActionReturn => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return [isOpen, handleOpen, handleClose]
}
