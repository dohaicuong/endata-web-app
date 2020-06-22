import React from 'react'
import { Paper, makeStyles, Button } from '@material-ui/core'
import NextStep, { NextStepButton } from 'dataComponents/claimActions/NextStep'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { DocumentsAction_data$key } from './__generated__/DocumentsAction_data.graphql'

type DocumentsActionProps = {
  data: DocumentsAction_data$key | null
}
const DocumentsAction: React.FC<DocumentsActionProps> = props => {
  const classes = useStyles()
  const data = useFragment(
    graphql`
      fragment DocumentsAction_data on Query {
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
      >
        Upload File
      </Button>
      <Button
        className={classes.actionButton}
        color="primary"
        variant="outlined"
        size="large"
      >
        View All Photos
      </Button>
    </Paper>
  )
}
export default DocumentsAction

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
