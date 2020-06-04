import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import {
  makeStyles,
  Grid,
  Paper,
  Tooltip,
  Collapse,
  IconButton,
} from '@material-ui/core'
import Info from 'components/Info'
import PortfolioIcon from 'components/PortfolioIcon'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import { ClaimInfoCard_info$key } from './__generated__/ClaimInfoCard_info.graphql'
import { ClaimInfoCard_user$key } from './__generated__/ClaimInfoCard_user.graphql'

type ClaimInfoCardProps = {
  info: ClaimInfoCard_info$key | null
  user: ClaimInfoCard_user$key | null
}
const ClaimInfoCard: React.FC<ClaimInfoCardProps> = props => {
  const classes = useStyles()
  const user = useFragment(
    graphql`
      fragment ClaimInfoCard_user on AuthenticatedUser {
        userType
      }
    `,
    props.user
  )

  const info = useFragment(
    graphql`
      fragment ClaimInfoCard_info on ClaimJob {
        insurer {
          companyName
        }
        refNumber
        incidentDetail {
          riskAddress {
            line1
            suburb
            state
            postcode
          }
          eventType {
            eventName
          }
          cATCode {
            cATCodeName
          }
        }
        insured {
          name
          phone1
          phone2
          phone3
          email
        }
        lodgeDate
        policyType {
          policyTypeName
        }
        policyCover {
          policyCoverName
        }
        insurer {
          policyTypeSuppliersView
          policyCoverSuppliersView
        }
        building {
          claimStatus {
            statusName
          }
          scopingSupplier {
            companyName
            companyPhone1
            companyPhone2
          }
          authorisedSupplier {
            companyName
            companyPhone1
            companyPhone2
          }
          jobSuppliers {
            quote {
              supplier {
                companyName
              }
              quoteStatus: quoteJobStatus {
                statusName
              }
            }
          }
          toCollectExcess
          excessValue
        }
        restoration {
          claimStatus {
            statusName
          }
          scopingSupplier {
            companyName
            companyPhone1
            companyPhone2
          }
          authorisedSupplier {
            companyName
            companyPhone1
            companyPhone2
          }
          jobSuppliers {
            quote {
              supplier {
                companyName
              }
              quoteStatus: quoteJobStatus {
                statusName
              }
            }
          }
          toCollectExcess
          excessValue
        }
        contents {
          portfolioType
          claimStatus {
            statusName
          }
          toCollectExcess
          excessValue
        }
      }
    `,
    props.info
  )

  const fields = [
    { label: 'Insurance Company', value: info?.insurer?.companyName },
    { label: 'Insurance Ref #', value: info?.refNumber },
    { label: 'Customer', value: info?.insured?.name },
    {
      label: 'Property/Risk Address',
      value: getAddress(info?.incidentDetail?.riskAddress),
    },
    { label: 'Phone(s)', value: getPhones(info?.insured) },
    {
      label: 'Builder and Status',
      value: getSupplierInfo(info?.building, 'Building', user),
      tooltip: getSupplierTooltip(
        info?.building?.authorisedSupplier,
        info?.building?.scopingSupplier
      ),
      startAdornment: <PortfolioIcon portfolio="Building" />,
    },
    {
      label: 'Restorer and Status',
      value: getSupplierInfo(info?.restoration, 'Restoration', user),
      tooltip: getSupplierTooltip(
        info?.restoration?.authorisedSupplier,
        info?.restoration?.scopingSupplier
      ),
      startAdornment: <PortfolioIcon portfolio="Restoration" />,
    },
    {
      label: 'Contents Status',
      value: getSupplierInfo(info?.contents, 'Contents', user),
      startAdornment: <PortfolioIcon portfolio="Contents" />,
    },
    { label: 'FNOL', value: info?.lodgeDate },
    { label: 'Event Type', value: info?.incidentDetail?.eventType?.eventName },
    {
      label: 'Catastrophe Code',
      value: info?.incidentDetail?.cATCode?.cATCodeName,
    },
    {
      label: 'Distributor',
      value: info?.policyType?.policyTypeName,
      show: info?.insurer?.policyCoverSuppliersView,
    },
    {
      label: 'PDS Reference',
      value: info?.policyCover?.policyCoverName,
      show: info?.insurer?.policyCoverSuppliersView,
    },
  ]

  const [collapsed, setCollapsed] = React.useState(true)
  const showFields = fields.slice(0, 8)
  const collapsedFields = fields.slice(8)

  return (
    <Paper className={classes.paperRoot}>
      <Grid className={classes.gridContainer} container spacing={1}>
        {showFields.map(field => (
          <InfoCardItem key={field.label} {...field} />
        ))}
        {collapsedFields.length && (
          <Collapse in={!collapsed} className={classes.collapseWrapper}>
            <Grid container spacing={2}>
              {collapsedFields.map(field => (
                <InfoCardItem key={field.label} {...field} />
              ))}
            </Grid>
          </Collapse>
        )}
      </Grid>
      <IconButton
        onClick={() => setCollapsed(previous => !previous)}
        className={classes.collapseButton}
      >
        {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
    </Paper>
  )
}
export default ClaimInfoCard

const useStyles = makeStyles(() => ({
  paperRoot: {
    position: 'relative',
    padding: 16,
    paddingRight: 32,
  },
  gridContainer: {
    marginBottom: 4,
  },
  collapseWrapper: {
    width: '100%',
  },
  collapseButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}))

const getAddress = (address: any) => {
  if (!address) return ''

  const { line1, suburb, state, postcode } = address
  return `${line1} ${suburb} ${state}, ${postcode}`
}
const getPhones = (insured: any) => {
  if (!insured) return ''
  const { phone1, phone2, phone3 } = insured
  return [phone1, phone2, phone3].filter(x => x).join(', ')
}
const getSupplierInfo = (portfolio: any, type: string, user: any) => {
  if (!portfolio) return 'N/a'
  if (type === 'Contents') {
    const { claimStatus, toCollectExcess, excessValue } = portfolio
    return `${claimStatus.statusName} ${
      toCollectExcess ? `, Excess - $${excessValue}` : ''
    }`
  }

  let name, status
  const excess = portfolio.toCollectExcess
    ? `- $${portfolio.excessValue}`
    : null
  if (user?.userType === 'Restorer') {
    name =
      portfolio.jobSuppliers &&
      portfolio.jobSuppliers[0] &&
      portfolio.jobSuppliers[0].quote &&
      portfolio.jobSuppliers[0].quote.supplier
        ? portfolio.jobSuppliers[0].quote.supplier.companyName
        : ''
    status =
      portfolio.jobSuppliers &&
      portfolio.jobSuppliers[0] &&
      portfolio.jobSuppliers[0].quote
        ? portfolio.jobSuppliers[0].quote.quoteStatus.statusName
        : ''
  } else {
    name = portfolio.authorisedSupplier
      ? portfolio.authorisedSupplier.companyName
      : portfolio.scopingSupplier
      ? portfolio.scopingSupplier.companyName
      : null
    status = portfolio.claimStatus.statusName
  }

  return `${name ? name : ''}${status ? `, ${status}` : ''}${
    excess ? `, Excess ${excess}` : ''
  }`
}

const getSupplierTooltip = (authorisedSupplier: any, scopingSupplier: any) => {
  const supplier = authorisedSupplier || scopingSupplier || null
  if (!supplier) return null

  const name = supplier?.companyName
    ? `${supplier?.companyName?.split('-')[0].trim()}\n`
    : ''
  const phone1 = supplier?.companyPhone1 ? `${supplier?.companyPhone1}\n` : ''
  const phone2 = supplier?.companyPhone2 ? `${supplier?.companyPhone2}` : ''

  return `${name}${phone1}${phone2}`
}

const InfoCardItem = ({
  label,
  value,
  tooltip,
  show = true,
  ...props
}: any) => {
  const classes = useInfoCardStyles()

  if (!show) return null
  return (
    <Grid item xs={3}>
      <Tooltip
        title={tooltip ?? ''}
        interactive
        classes={{ tooltip: classes.tooltip }}
      >
        <div style={{ width: '100%' }}>
          <Info label={label} value={value} {...props} fullWidth />
        </div>
      </Tooltip>
    </Grid>
  )
}
const useInfoCardStyles = makeStyles({
  tooltip: {
    whiteSpace: 'pre-line',
  },
})
