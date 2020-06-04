import React from 'react'
import NextStepAction, {
  NextStepActions,
  useNextStepAction,
} from './NextStepAction'

const placeHolderAction = () => console.log('action loading...')
export type ActionContextValue = {
  nextStep: NextStepActions
}
export const ActionContext = React.createContext<ActionContextValue>({
  nextStep: { handleOpen: placeHolderAction, handleClose: placeHolderAction },
})
export const useClaimAction = () => {
  const value = React.useContext(ActionContext)
  return value
}

const ActionProvider: React.FC = ({ children }) => {
  const [
    isNextActionOpen,
    handleNextActionOpen,
    handleNextActionClose,
  ] = useNextStepAction({})

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
