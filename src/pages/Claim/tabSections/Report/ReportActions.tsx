import React from 'react'
import { Paper, Button, makeStyles } from '@material-ui/core'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import NextStep, { NextStepButton } from 'dataComponents/claimActions/NextStep'

import { ReportActions_data$key } from './__generated__/ReportActions_data.graphql'

export type ReportActionsProps = {
  data: ReportActions_data$key | null

  isSavedData: boolean
  isReadOnly: boolean

  // saveReport: (claimId: string, values: any) => void
  resetReport: () => void
  submitReport: () => void
}
const ReportActions: React.FC<ReportActionsProps> = ({
  isSavedData,
  isReadOnly,
  resetReport,
  submitReport,
  ...props
}) => {
  const classes = useStyles()

  const data = useFragment(
    graphql`
      fragment ReportActions_data on Query {
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
        color="primary"
        variant="outlined"
        size="large"
        disabled={!isSavedData || (isSavedData && !isReadOnly)}
        onClick={resetReport}
      >
        Reset
      </Button>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
        disabled={!isSavedData || (isSavedData && isReadOnly)}
        onClick={submitReport}
      >
        Submit
      </Button>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
        type="submit"
        disabled={isReadOnly}
      >
        Save
      </Button>
    </Paper>
  )
}
export default ReportActions

const useStyles = makeStyles(theme => ({
  actionRoot: {
    display: 'flex',
    padding: theme.spacing(),
  },
  pad: { flexGrow: 1 },
  actionButton: {
    marginRight: theme.spacing(),
  },
}))
