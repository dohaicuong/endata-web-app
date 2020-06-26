import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment } from 'react-relay/hooks'
import { AwaitingInfo_data$key } from './__generated__/AwaitingInfo_data.graphql'

import { Button, Dialog, makeStyles, Grid } from '@material-ui/core'
import { PortfolioType } from 'pages/Claim/tabSections/Variations/VariationsBody/__generated__/VariationsBodyPaginationQuery.graphql'
import AwaitingInfoPortfolio from './AwaitingInfoPortfolio'
import ActionButton from 'dataComponents/ActionButton'
import { AwaitingInfo_action$key } from './__generated__/AwaitingInfo_action.graphql'

type AwaitingInfoProps = {
  action: AwaitingInfo_action$key | null
  data: AwaitingInfo_data$key | null
}
const AwaitingInfo: React.FC<AwaitingInfoProps> = props => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const action = useFragment(
    graphql`
      fragment AwaitingInfo_action on ClaimJobAction {
        awaitingInfo {
          ...ActionButton_action
        }
      }
    `,
    props.action
  )

  const data = useFragment(
    graphql`
      fragment AwaitingInfo_data on Query {
        ...AwaitingInfoPortfolio_data
        currentUser {
          userType
          claimJob(where: { id: $claimId }) {
            id
            hasBuilding
            hasContents
            hasRestoration
            building {
              ...AwaitingInfoPortfolio_portfolioData
            }
            contents {
              ...AwaitingInfoPortfolio_portfolioData
            }
            restoration {
              ...AwaitingInfoPortfolio_portfolioData
            }
          }
        }
      }
    `,
    props.data
  )

  const userType = data?.currentUser?.userType
  const { hasBuilding, hasContents, hasRestoration } =
    data?.currentUser?.claimJob ?? {}
  const portfolios: PortfolioType[] = React.useMemo(() => {
    // filter portfolio with hasBuilding, hasContents, hasRestoration
    const portfolios: any[] = ['Building', 'Contents', 'Restoration'].filter(
      portfolio => {
        if (portfolio === 'Building' && hasBuilding) return true
        if (portfolio === 'Contents' && hasContents) return true
        if (portfolio === 'Restoration' && hasRestoration) return true
        return false
      }
    )

    // if admin return all portfolios
    if (userType === 'Administrator') return portfolios

    // if not admin filter out unrelated portfolio
    return portfolios.filter(portfolio => {
      if (portfolio === 'Building' && userType === 'Builder') return true
      if (portfolio === 'Contents' && userType === 'ContentSupplier')
        return true
      if (portfolio === 'Restoration' && userType === 'Restorer') return true
      return false
    })
  }, [userType, hasBuilding, hasContents, hasRestoration])

  return (
    <>
      <ActionButton
        action={action?.awaitingInfo ?? null}
        onClick={handleOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
      >
        <Grid container spacing={2} className={classes.container}>
          {portfolios.map(portfolio => {
            const portfolioData =
              // @ts-ignore
              data?.currentUser?.claimJob?.[portfolio.toLowerCase()]
            return (
              <Grid item xs key={portfolio}>
                <AwaitingInfoPortfolio
                  data={data}
                  claimId={data?.currentUser?.claimJob?.id ?? ''}
                  portfolio={portfolio}
                  portfolioData={portfolioData}
                />
              </Grid>
            )
          })}
          <Grid item xs={12} className={classes.actionArea}>
            <Button color="primary" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}
export default AwaitingInfo
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
