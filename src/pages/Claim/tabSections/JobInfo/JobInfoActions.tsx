import React from 'react'
import { Paper, Button, makeStyles } from '@material-ui/core'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { JobInfoActions_actions$key } from './__generated__/JobInfoActions_actions.graphql'
import { JobInfoActions_data$key } from './__generated__/JobInfoActions_data.graphql'
import NextStep, { NextStepButton } from 'dataComponents/claimActions/NextStep'
import OfferAccept from 'dataComponents/claimActions/OfferAccept'
import OfferDecline from 'dataComponents/claimActions/OfferDecline'
import SupplierAllocate from 'dataComponents/claimActions/SupplierAllocate'

type JobInfoActionsProps = {
  data: JobInfoActions_data$key | null
  actions: JobInfoActions_actions$key | null
}
const JobInfoActions: React.FC<JobInfoActionsProps> = props => {
  const classes = useStyles()

  const actions = useFragment(
    graphql`
      fragment JobInfoActions_actions on ClaimJobAction {
        updateClaim {
          label
          isDisabled
          isDisplay
        }
      }
    `,
    props.actions
  )

  const data = useFragment(
    graphql`
      fragment JobInfoActions_data on Query {
        ...NextStep_data @arguments(claimId: $claimId)
        ...OfferAccept_data @arguments(claimId: $claimId)
        ...OfferDecline_data @arguments(claimId: $claimId)
        ...SupplierAllocate_data @arguments(claimId: $claimId)
      }
    `,
    props.data
  )

  return (
    <Paper className={classes.actionRoot}>
      <React.Suspense fallback={<NextStepButton />}>
        <NextStep data={data} />
      </React.Suspense>
      <div className={classes.pad} />
      <OfferAccept
        data={data}
        className={classes.actionButton}
        label="Accept Offer"
      />
      <OfferDecline
        data={data}
        className={classes.actionButton}
        label="Decline Offer"
      />
      <SupplierAllocate
        data={data}
        className={classes.actionButton}
        label="Allocate Supplier"
      />
      {actions?.updateClaim.isDisplay && (
        <Button
          className={classes.actionButton}
          disabled={actions.updateClaim.isDisabled}
          color="primary"
          variant="outlined"
          size="large"
          type="submit"
        >
          {actions.updateClaim.label}
        </Button>
      )}
    </Paper>
  )
}
export default JobInfoActions

const useStyles = makeStyles(theme => ({
  actionRoot: {
    display: 'flex',
    padding: theme.spacing(),
    marginTop: theme.spacing(),
  },
  pad: { flexGrow: 1 },
  actionButton: {
    marginRight: theme.spacing(),
  },
}))
