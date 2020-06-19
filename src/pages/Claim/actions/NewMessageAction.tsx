import React from 'react'
import { Dialog, Grid, makeStyles } from '@material-ui/core'
import PortfolioIcon from 'components/PortfolioIcon'
import Info from 'components/Info'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
// import { NextStepActionRefetchQuery } from './__generated__/NextStepActionRefetchQuery.graphql'
// import { NextStepAction_data$key } from './__generated__/NextStepAction_data.graphql'

export type NewMessageActions = {
  handleOpen: () => void
  handleClose: () => void
}
export type useNewMessageActionProps = {
  defaultOpen?: boolean
}
export type NextStepActionProps = {
  open: boolean
  onClose: () => void
  // data: NextStepAction_data$key | null
}
const NewMessageAction: React.FC<any> = ({ open, onClose, ...props }) => {
  const classes = useStyles()

  // const [data, refetch] = useRefetchableFragment<
  //   NextStepActionRefetchQuery,
  //   NextStepAction_data$key
  // >(
  //   graphql`
  //     fragment NextStepAction_data on Query
  //       @refetchable(queryName: "NextStepActionRefetchQuery")
  //       @argumentDefinitions(
  //         isOpen: { type: "Boolean", defaultValue: false }
  //         claimId: { type: "ID!" }
  //       ) {
  //       claimNextStep(where: { id: $claimId }) @include(if: $isOpen) {
  //         statusName

  //         description
  //         nextStep
  //         portfolioType
  //       }
  //     }
  //   `,
  //   props.data
  // )
  // React.useEffect(() => {
  //   if (open) refetch({ isOpen: true })
  // }, [open, refetch])

  return (
    <Dialog onClose={onClose} open={open} classes={{ paper: classes.paper }}>
      <h1>test</h1>
      {/* {!data?.claimNextStep ? (
        'Loading...'
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          {data?.claimNextStep.map((step, index) => {
            if (!step) return null

            return (
              <Grid item xs key={index}>
                <PortfolioIcon
                  portfolio={step.portfolioType as any}
                  className={classes.portfolioIcon}
                />
                <Info
                  label={step.statusName}
                  value={step.description}
                  fullWidth
                  rowsMax={8}
                />
                <Info
                  label="Next step"
                  value={step.nextStep}
                  fullWidth
                  rowsMax={8}
                />
              </Grid>
            )
          })}
        </Grid>
      )} */}
    </Dialog>
  )
}
export default NewMessageAction
const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: '60%',
  },
  container: {
    padding: theme.spacing(2),
  },
  portfolioIcon: {
    margin: '0 auto 20px auto',
    display: 'flex',
    fontSize: '2.5rem',
  },
}))

export type useNewMessageProps = {
  defaultOpen?: boolean
}
type useNewMessageReturn = [boolean, () => void, () => void]
export const useNewMessageAction = ({
  defaultOpen = false,
}: useNewMessageProps): useNewMessageReturn => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return [isOpen, handleOpen, handleClose]
}
