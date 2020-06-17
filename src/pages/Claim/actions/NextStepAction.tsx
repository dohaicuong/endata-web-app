import React from 'react'
import { Dialog, Grid } from '@material-ui/core'

import {
  useLazyLoadQuery,
  useFragment,
  useRefetchableFragment,
} from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { NextStepActionRefetchQuery } from './__generated__/NextStepActionRefetchQuery.graphql'
import { NextStepAction_data$key } from './__generated__/NextStepAction_data.graphql'
import PortfolioIcon from 'components/PortfolioIcon'
import Info from 'components/Info'

export type NextStepActions = {
  handleOpen: () => void
  handleClose: () => void
}
export type NextStepActionProps = {
  open: boolean
  onClose: () => void
  claimId: string
  data: NextStepAction_data$key | null
}
const NextStepAction: React.FC<NextStepActionProps> = ({
  open,
  onClose,
  ...props
}) => {
  const [data, refetch] = useRefetchableFragment<
    NextStepActionRefetchQuery,
    NextStepAction_data$key
  >(
    graphql`
      fragment NextStepAction_data on Query
        @refetchable(queryName: "NextStepActionRefetchQuery")
        @argumentDefinitions(
          isOpen: { type: "Boolean", defaultValue: false }
          claimId: { type: "ID!" }
        ) {
        claimNextStep(where: { id: $claimId }) @include(if: $isOpen) {
          statusName

          description
          nextStep
          portfolioType
        }
      }
    `,
    props.data
  )
  React.useEffect(() => {
    if (open) refetch({ isOpen: true })
  }, [open])

  return (
    <Dialog onClose={onClose} open={open}>
      {!data?.claimNextStep ? (
        'Loading...'
      ) : (
        <Grid container justify="center" alignItems="center">
          {data?.claimNextStep.map((step, index) => {
            if (!step) return null

            return (
              <Grid item xs key={index}>
                <PortfolioIcon portfolio={step.portfolioType as any} />
                <Info label={step.statusName} value={step.description} />
                <Info label="Next step" value={step.nextStep} />
              </Grid>
            )
          })}
        </Grid>
      )}
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
