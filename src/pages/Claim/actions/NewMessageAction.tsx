import React from 'react'
import {
  Card,
  Grid,
  makeStyles,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Formik, Form } from 'formik'
import { Minimize, Clear } from '@material-ui/icons'
import ComboBoxField from 'components/Formik/ComboBoxField'
import TextField from 'components/Formik/TextField'
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
const NewMessageAction: React.FC<any> = ({
  open,
  onClose,
  onOpen,
  ...props
}) => {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{}}
      validate={values => {
        
        // if (values && onChange) onChange(values)
      }}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSubmit={() => {}}
    >
      {open ? (
        <Card style={{ width: '500px', position: 'fixed', bottom: '0' }}>
          <CardHeader
            title="New Communication"
            action={
              <>
                <IconButton aria-label="settings" onClick={onClose}>
                  <Minimize />
                </IconButton>
                <IconButton aria-label="settings" onClick={onClose}>
                  <Clear />
                </IconButton>
              </>
            }
          />
          <CardContent>
            <ComboBoxField loading variant="outlined" name="wating..." />
            <TextField 
              label="Tenant Name"
              name="tenantName"
              />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"></IconButton>
            <IconButton aria-label="share"></IconButton>
          </CardActions>
        </Card>
      ) : (
        <div></div>
      )}
    </Formik>
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
