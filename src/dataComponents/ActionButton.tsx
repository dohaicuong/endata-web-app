import React from 'react'
import { makeStyles, Button } from '@material-ui/core'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ActionButton_action$key } from './__generated__/ActionButton_action.graphql'

type ActionButtonProps = {
  action: ActionButton_action$key | null
  onClick?: any
}
const ActionButton: React.FC<ActionButtonProps> = props => {
  const classes = useStyles()

  const action = useFragment(
    graphql`
      fragment ActionButton_action on ActionControl {
        label
        isDisabled
        isDisplay
      }
    `,
    props.action
  )

  if (!action?.isDisplay) return null

  return (
    <Button
      className={classes.actionButton}
      color="primary"
      variant="outlined"
      size="large"
      onClick={props.onClick}
      disabled={action?.isDisabled}
    >
      {action.label}
    </Button>
  )
}
export default ActionButton

const useStyles = makeStyles(theme => ({
  actionButton: {
    marginRight: theme.spacing(),
  },
}))
