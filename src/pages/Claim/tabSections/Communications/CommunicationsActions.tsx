import React from 'react'
import { Paper, Button, makeStyles } from '@material-ui/core'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import NextStep, { NextStepButton } from 'dataComponents/claimActions/NextStep'
import { CommunicationsActions_data$key } from './__generated__/CommunicationsActions_data.graphql'

type CommunicationsActionsProps = {
  data: CommunicationsActions_data$key | null
}
const CommunicationsActions: React.FC<CommunicationsActionsProps> = props => {
  const classes = useStyles()

  const data = useFragment(
    graphql`
      fragment CommunicationsActions_data on Query {
        ...NextStep_data @arguments(claimId: $claimId)
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
      <Button
        className={classes.actionButton}
        // disabled={actions.updateClaim.isDisabled}
        color="primary"
        variant="outlined"
        size="large"
        type="submit"
        // onClick={newMessage.handleOpen}
      >
        New Message
      </Button>
    </Paper>
  )
}
export default CommunicationsActions

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
