import React from 'react'
import { Dialog, Grid, makeStyles, Button } from '@material-ui/core'
import PortfolioIcon from 'components/PortfolioIcon'
import Info from 'components/Info'

import { useRefetchableFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { NextStepRefetchQuery } from './__generated__/NextStepRefetchQuery.graphql'
import { NextStep_data$key } from './__generated__/NextStep_data.graphql'

type NextStepProps = {
  data: NextStep_data$key | null
}
const NextStep: React.FC<NextStepProps> = props => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const classes = useStyles()

  const [data, refetch] = useRefetchableFragment<
    NextStepRefetchQuery,
    NextStep_data$key
  >(
    graphql`
      fragment NextStep_data on Query
        @refetchable(queryName: "NextStepRefetchQuery")
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
  }, [open, refetch])

  return (
    <>
      <NextStepButton handleOpen={handleOpen} />
      <Dialog
        onClose={handleClose}
        open={open}
        classes={{ paper: classes.paper }}
      >
        {!data?.claimNextStep ? (
          'Loading...'
        ) : (
          <Grid
            container
            justify="center"
            alignItems="stretch"
            spacing={3}
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
        )}
      </Dialog>
    </>
  )
}
export default NextStep
const useStyles = makeStyles(theme => ({
  actionButton: {
    marginRight: theme.spacing(),
  },
  paper: {
    minWidth: '60%',
    maxWidth: '80%',
    maxHeight: '70vh',
  },
  container: {
    padding: theme.spacing(2),
    width: '100%',
    margin: 0,
  },
  portfolioIcon: {
    margin: '0 auto 20px auto',
    display: 'flex',
    fontSize: '2.5rem',
  },
}))

type NextStepButtonProps = {
  handleOpen?: () => void
}
export const NextStepButton: React.FC<NextStepButtonProps> = props => {
  const classes = useStyles()

  return (
    <Button
      onClick={props.handleOpen}
      color="primary"
      variant="outlined"
      size="large"
      className={classes.actionButton}
    >
      Next Step
    </Button>
  )
}
