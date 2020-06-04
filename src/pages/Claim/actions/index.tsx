import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core'

const placeHolderAction = () => console.log('action loading...')
export type ActionContextValue = {
  nextStep: NextStepActions
}
export const ActionContext = React.createContext<ActionContextValue>({
  nextStep: { handleOpen: placeHolderAction, handleClose: placeHolderAction },
})

const ActionProvider: React.FC = ({ children }) => {
  const [isNextActionOpen, setIsNextActionOpen] = React.useState(false)
  const handleNextActionOpen = () => setIsNextActionOpen(true)
  const handleNextActionClose = () => setIsNextActionOpen(false)

  return (
    <>
      <ActionContext.Provider
        value={{
          nextStep: {
            handleOpen: handleNextActionOpen,
            handleClose: handleNextActionClose,
          },
        }}
      >
        {children}
      </ActionContext.Provider>
      <NextStepAction open={isNextActionOpen} onClose={handleNextActionClose} />
    </>
  )
}
export default ActionProvider

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
