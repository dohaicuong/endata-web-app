import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'

// import NextStepAction, {
//   NextStepActions,
//   useNextStepAction,
// } from './NextStepAction'
import { useFragment } from 'react-relay/hooks'

// const placeHolderAction = () => console.log('action loading...')
export type ActionContextValue = {
  // nextStep: NextStepActions
}
export const ActionContext = React.createContext<ActionContextValue>({
  // nextStep: { handleOpen: placeHolderAction, handleClose: placeHolderAction },
})
export const useClaimAction = () => {
  const value = React.useContext(ActionContext)
  return value
}

type ActionProviderProps = {
  data: any
}
const ActionProvider: React.FC<ActionProviderProps> = ({
  children,
  ...props
}) => {
  // const [
  //   isNextActionOpen,
  //   handleNextActionOpen,
  //   handleNextActionClose,
  // ] = useNextStepAction({})

  const data = useFragment(
    graphql`
      fragment actions_data on Query {
        ...NextStep_data @arguments(claimId: $claimId)
      }
    `,
    props.data
  )

  return (
    <>
      <ActionContext.Provider
        value={
          {
            // nextStep: {
            //   handleOpen: handleNextActionOpen,
            //   handleClose: handleNextActionClose,
            // },
          }
        }
      >
        {children}
      </ActionContext.Provider>

      {/* <React.Suspense fallback={null}>
        <NextStepAction
          open={isNextActionOpen}
          onClose={handleNextActionClose}
          data={data}
        />
      </React.Suspense> */}
    </>
  )
}
export default ActionProvider
