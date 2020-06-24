import React from 'react'
import {
  Button,
  ButtonProps,
  Dialog,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { SupplierAllocate_data$key } from './__generated__/SupplierAllocate_data.graphql'
import SupplierAllocateForm from './SupplierAllocateForm'
import { useSnackbar } from 'notistack'

type SupplierAllocateProps = ButtonProps & {
  label?: string
  data: SupplierAllocate_data$key | null
}
const SupplierAllocate: React.FC<SupplierAllocateProps> = props => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const data = useFragment(
    graphql`
      fragment SupplierAllocate_data on Query
        @argumentDefinitions(claimId: { type: "ID!" }) {
        currentUser {
          userType
          claimJob(where: { id: $claimId }) {
            id
            hasBuilding
            building {
              id
              reallocate
            }
            hasRestoration
            restoration {
              id
              reallocate
            }

            insurer {
              companyId
            }
            incidentDetail {
              riskAddress {
                postcode
              }
            }
          }
        }

        ...BuilderComboBox_data
          @arguments(companyIds: $companyId, postcode: $postcode)
        ...RestorerComboBox_data
          @arguments(companyIds: $companyId, postcode: $postcode)
      }
    `,
    props.data
  )

  const isAdmin = data?.currentUser?.userType === 'Administrator'
  const claim = data?.currentUser?.claimJob
  const isBuilderReallocate =
    data?.currentUser?.claimJob?.hasBuilding && claim?.building?.reallocate
  const isRestorerReallocate =
    data?.currentUser?.claimJob?.hasRestoration &&
    claim?.restoration?.reallocate

  React.useEffect(() => {
    if (isAdmin && (isBuilderReallocate || isRestorerReallocate)) {
      enqueueSnackbar(
        `Please immediately allocate the builder by using the "Allocate Supplier" button`,
        {
          variant: 'info',
        }
      )
    }
  }, [isAdmin, isBuilderReallocate, isRestorerReallocate])

  if (!isAdmin || !(isBuilderReallocate && !isRestorerReallocate)) return null

  const groups = [
    { show: isBuilderReallocate, portfolio: 'Building' },
    { show: isRestorerReallocate, portfolio: 'Restoration' },
  ].filter(group => group.show)
  return (
    <>
      <Button
        color="primary"
        variant="outlined"
        size="large"
        {...props}
        onClick={handleOpen}
      >
        {props.label ? props.label : 'Allocate Supplier'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h6">Allocate Supplier</Typography>
          </Grid>
          {groups.map(group => (
            <Grid item xs={(12 / groups.length) as any} key={group.portfolio}>
              <SupplierAllocateForm
                data={data}
                portfolio={group.portfolio as any}
                claimId={data?.currentUser?.claimJob?.id ?? ''}
                handleClose={handleClose}
              />
            </Grid>
          ))}
          <Grid item xs={12} className={classes.actionArea}>
            <Button color="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}
export default SupplierAllocate
const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: '40%',
    maxWidth: '60%',
    maxHeight: '70vh',
  },
  container: {
    padding: theme.spacing(2),
    width: '100%',
    margin: 0,
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
