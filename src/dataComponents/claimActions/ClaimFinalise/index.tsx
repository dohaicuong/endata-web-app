import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimFinalise_claim$key } from './__generated__/ClaimFinalise_claim.graphql'
import {
  makeStyles,
  Dialog,
  Grid,
  ButtonProps,
  Button,
  Typography,
} from '@material-ui/core'
import PortfolioIcon from 'components/PortfolioIcon'
import ClaimFinaliseResetForm from './ClaimFinaliseResetForm'
import ClaimFinaliseForm from './ClaimFinaliseForm'
import { PortfolioType } from 'pages/Claim/__generated__/ClaimInfoCard_info.graphql'
import { ClaimFinalise_data$key } from './__generated__/ClaimFinalise_data.graphql'

type ClaimFinaliseProps = ButtonProps & {
  label?: string

  data: ClaimFinalise_data$key | null
  claim: ClaimFinalise_claim$key | null
}
const ClaimFinalise: React.FC<ClaimFinaliseProps> = props => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const data = useFragment(
    graphql`
      fragment ClaimFinalise_data on Query {
        ...ClaimFinaliseForm_data
      }
    `,
    props.data
  )

  const claim = useFragment(
    graphql`
      fragment ClaimFinalise_claim on ClaimJob {
        id

        hasBuilding
        building {
          claimStatus {
            statusName
          }
          ...ClaimFinaliseResetForm_data
        }

        hasContents
        contents {
          claimStatus {
            statusName
          }
          ...ClaimFinaliseResetForm_data
        }

        hasRestoration
        restoration {
          claimStatus {
            statusName
          }
          ...ClaimFinaliseResetForm_data
        }
      }
    `,
    props.claim
  )

  // @ts-ignore
  const portfolios: { type: PortfolioType; data: any }[] = [
    { type: 'Building', data: claim?.building },
    { type: 'Contents', data: claim?.contents },
    { type: 'Restoration', data: claim?.restoration },
  ].filter(portfolio => {
    if (portfolio.type === 'Building' && claim?.hasBuilding) return true
    if (portfolio.type === 'Contents' && claim?.hasContents) return true
    if (portfolio.type === 'Restoration' && claim?.hasRestoration) return true

    return false
  })

  return (
    <>
      <Button
        onClick={handleOpen}
        color="primary"
        variant="outlined"
        {...props}
      >
        {props.label ? props.label : 'Finalise Claim'}
      </Button>
      <Dialog
        onClose={handleClose}
        open={open}
        classes={{ paper: classes.paper }}
      >
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}>
            <Typography variant="h6">Claim finalise</Typography>
          </Grid>
          {portfolios.map(portfolio => (
            <Grid item xs key={portfolio.type}>
              <PortfolioIcon
                portfolio={portfolio.type as any}
                className={classes.portfolioIcon}
              />
              {portfolio.data?.claimStatus?.statusName === 'Claim Finalised' ? (
                <ClaimFinaliseResetForm
                  claimId={claim?.id ?? ''}
                  portfolio={portfolio.type}
                  data={portfolio.data}
                />
              ) : (
                <ClaimFinaliseForm
                  data={data}
                  claimId={claim?.id ?? ''}
                  portfolio={portfolio.type}
                />
              )}
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button color="primary" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}
export default ClaimFinalise
const useStyles = makeStyles(theme => ({
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
