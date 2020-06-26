import React from 'react'
import { PortfolioType } from 'pages/Communication/__generated__/CommunicationQuery.graphql'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import PortfolioIcon from 'components/PortfolioIcon'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { AwaitingInfoPortfolio_portfolioData$key } from './__generated__/AwaitingInfoPortfolio_portfolioData.graphql'
import WaitForInfoForm from './WaitForInfoForm'
import { AwaitingInfoPortfolio_data$key } from './__generated__/AwaitingInfoPortfolio_data.graphql'
import WaitForInfoCancel from './WaitForInfoCancel'

type AwaitingInfoPortfolioProps = {
  claimId: string
  portfolio: PortfolioType
  portfolioData: AwaitingInfoPortfolio_portfolioData$key | null
  data: AwaitingInfoPortfolio_data$key | null
}
const AwaitingInfoPortfolio: React.FC<AwaitingInfoPortfolioProps> = ({
  claimId,
  portfolio,
  ...props
}) => {
  const classes = useStyles()

  const data = useFragment(
    graphql`
      fragment AwaitingInfoPortfolio_data on Query {
        ...WaitForInfoForm_data
      }
    `,
    props.data
  )

  const portfolioData = useFragment(
    graphql`
      fragment AwaitingInfoPortfolio_portfolioData on ClaimPortfolio {
        claimStatus {
          statusId
        }
      }
    `,
    props.portfolioData
  )

  const statusId = portfolioData?.claimStatus?.statusId ?? -1
  const status = React.useMemo(() => {
    if (statusId === 11) return 'CLAIM_FINALISED'
    if (statusId === 33) return 'INFO_SUBMITTED'
    if (portfolio === 'Contents' && statusId === 102) return 'INFO_SUBMITTED'
    return 'AWAITING_INFO'
  }, [portfolio, statusId])

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12}>
        <PortfolioIcon
          portfolio={portfolio}
          className={classes.portfolioIcon}
        />
        <Grid item xs={12}>
          {status === 'CLAIM_FINALISED' && (
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Claim finalised
            </Typography>
          )}
          {status === 'INFO_SUBMITTED' && (
            <WaitForInfoCancel claimId={claimId} portfolio={portfolio} />
          )}
          {status === 'AWAITING_INFO' && (
            <WaitForInfoForm
              claimId={claimId}
              portfolio={portfolio}
              data={data}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default AwaitingInfoPortfolio
const useStyles = makeStyles({
  portfolioIcon: {
    margin: '0 auto 20px auto',
    display: 'flex',
    fontSize: '2.5rem',
  },
})
