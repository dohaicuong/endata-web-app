import React from 'react'

import Info from 'components/Info'
import PortfolioIcon from 'components/PortfolioIcon'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimsTable_user$key } from './__generated__/ClaimsTable_user.graphql'
import { ClaimsTable_claims$key } from './__generated__/ClaimsTable_claims.graphql'
import Table from './Table'
import { IconButton, Grid, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

type ClaimsTableProps = {
  user: ClaimsTable_user$key | null
  claims: ClaimsTable_claims$key | null

  isLoadingMore: boolean
  hasNext: boolean
  loadMore: () => void
}
const ClaimsTable: React.FC<ClaimsTableProps> = props => {
  const user = useFragment(
    graphql`
      fragment ClaimsTable_user on AuthenticatedUser {
        userType
      }
    `,
    props.user
  )
  const userType = user?.userType

  const claims = useFragment(
    graphql`
      fragment ClaimsTable_claims on ClaimJobConnection {
        totalCount
        edges {
          node {
            id

            hasBuilding
            hasContents
            hasRestoration

            # Ins Ref #
            refNumber
            # Ins Company
            insurer {
              companyName
            }
            # FNOL
            lodgeDate
            # Request Date, Request
            building {
              jobSuppliers {
                requestDate
                requestType
              }
            }
            contents {
              jobSuppliers {
                requestDate
                requestType
              }
            }
            restoration {
              jobSuppliers {
                requestDate
                requestType
              }
            }
            # Customer
            insured {
              name
            }
            # Suburb, State
            incidentDetail {
              riskAddress {
                suburb
                state
              }
            }
            # Value
            building {
              authorisedValue
              scopedValue
              jobSuppliers {
                quote {
                  total
                }
              }
            }
            contents {
              jobSuppliers {
                quote {
                  total
                }
              }
            }
            restoration {
              jobSuppliers {
                quote {
                  total
                }
              }
            }
            # Status
            building {
              jobSuppliers {
                quote {
                  quoteStatus {
                    statusName
                  }
                }
              }
              claimStatus {
                statusName
              }
            }
            contents {
              jobSuppliers {
                quote {
                  quoteStatus {
                    statusName
                  }
                }
              }
              claimStatus {
                statusName
              }
            }
            restoration {
              jobSuppliers {
                quote {
                  quoteStatus {
                    statusName
                  }
                }
              }
              claimStatus {
                statusName
              }
            }
            # Builder
            building {
              authorisedSupplier {
                companyName
              }
              scopingSupplier {
                companyName
              }
            }
            # Building Status
            building {
              claimStatus {
                statusName
              }
            }
            #Days
            building {
              daysAtStatus
            }
            # Restorer
            restoration {
              authorisedSupplier {
                companyName
              }
              scopingSupplier {
                companyName
              }
            }
            # Restoration Status
            restoration {
              claimStatus {
                statusName
              }
            }
            # Content Status
            contents {
              claimStatus {
                statusName
              }
            }
          }
        }
      }
    `,
    props.claims
  )
  const tableData = claims?.edges?.map(edge => {
    const claim = edge?.node
console.log(claim)
    const portfolios = ['Building', 'Contents', 'Restoration'].filter(
      (_, index) => {
        if (!claim?.hasBuilding && index === 0) return false
        if (!claim?.hasContents && index === 1) return false
        if (!claim?.hasRestoration && index === 2) return false
        return true
      }
    )
    const requestDate =
      userType === 'Builder'
        ? claim?.building?.jobSuppliers?.[0]?.requestDate
        : userType === 'Restorer'
        ? claim?.restoration?.jobSuppliers?.[0]?.requestDate
        : userType === 'ContentSupplier'
        ? claim?.contents?.jobSuppliers?.[0]?.requestDate
        : null
    const request =
      userType === 'Builder'
        ? claim?.building?.jobSuppliers?.[0]?.requestType
        : userType === 'Restorer'
        ? claim?.restoration?.jobSuppliers?.[0]?.requestType
        : userType === 'ContentSupplier'
        ? claim?.contents?.jobSuppliers?.[0]?.requestType
        : null

    const value =
      userType === 'Administrator'
        ? claim?.building?.authorisedValue || claim?.building?.scopedValue
        : userType === 'Builder'
        ? claim?.building?.jobSuppliers?.[0]?.quote?.total
        : userType === 'Restorer'
        ? claim?.restoration?.jobSuppliers?.[0]?.quote?.total
        : userType === 'ContentSupplier'
        ? claim?.contents?.jobSuppliers?.[0]?.quote?.total
        : null
    const status =
      userType === 'Builder'
        ? claim?.building?.jobSuppliers?.[0]?.quote?.quoteStatus?.statusName ||
          claim?.building?.claimStatus?.statusName
        : userType === 'Restorer'
        ? claim?.restoration?.jobSuppliers?.[0]?.quote?.quoteStatus
            ?.statusName || claim?.restoration?.claimStatus?.statusName
        : userType === 'ContentSupplier'
        ? claim?.contents?.jobSuppliers?.[0]?.quote?.quoteStatus?.statusName ||
          claim?.contents?.claimStatus?.statusName
        : null

    const builder =
      claim?.building?.authorisedSupplier?.companyName ||
      claim?.building?.scopingSupplier?.companyName ||
      null
    const restorer =
      claim?.restoration?.authorisedSupplier?.companyName ||
      claim?.restoration?.scopingSupplier?.companyName ||
      null
    // const insuredPhone = [claim.phone1, claim.phone2, claim.phone3].filter(x => x).join(', ')

    // const incidentAddress =
    //   claim?.incidentDetail?.riskAddress &&
    //   `${line1} ${suburb} ${state}, ${postcode}`

    return {
      id: claim?.id,
      portfolios,
      refNumber: claim?.refNumber,
      companyName: claim?.insurer?.companyName,
      fnol: claim?.lodgeDate,
      requestDate,
      request,
      customerName: claim?.insured?.name,
      suburb: claim?.incidentDetail?.riskAddress?.suburb,
      state: claim?.incidentDetail?.riskAddress?.state,
      value,
      status,
      builder,
      buildingStatus: claim?.building?.claimStatus?.statusName,
      daysAtStatus: claim?.building?.daysAtStatus,
      restorer,
      restorationStatus: claim?.building?.claimStatus?.statusName,
      contentsStatus: claim?.building?.claimStatus?.statusName,
    }
  })

  const tableColumns: any[] = getTableColumns(userType)
  const renderRowSubComponent = React.useCallback(({ row: { original } }) => {
    const blocks = [
      { label: 'Ins Ref #', value: original.refNumber },
      { label: 'Customer', value: original.insured?.name },
      { label: 'Phone(s)', value: original._insuredPhone },
      { label: 'Customer Email', value: original.insured?.email },
      { label: 'Incident Date', value: original.incidentDetail?.incidentDate },
      { label: 'Property/Risk Address', value: original._incidentAddress },
      { label: 'Builder', value: original._claimBuilder },
      { label: 'Restorer', value: original._claimRestorer },
    ]

    return (
      <Grid container spacing={2}>
        {blocks.map(({ label, value }) => (
          <Grid item xs={3} key={label}>
            <Info label={label} value={value} />
          </Grid>
        ))}
      </Grid>
    )
  }, [])

  const { push } = useHistory()
  const onRowClick = (row: any) => {
    const claimId = row.original.id
    push(`/claim/${claimId}/job-info`)
  }

  const onScroll = async ({
    target: { scrollTop, offsetHeight, scrollHeight },
  }: any) => {
    if (props.isLoadingMore) return null

    const fetchOffset = 150
    const scrollPosition = scrollTop + offsetHeight - 5
    if (props.hasNext && scrollHeight - scrollPosition < fetchOffset) {
      await props.loadMore()
    }
  }

  const totalCount = claims?.totalCount ?? 0
  return (
    <>
      <Typography variant="subtitle1">
        Found {totalCount} {`${totalCount < 2 ? 'claim' : 'claims'}`}
      </Typography>
      <Table
        isLoading={props.isLoadingMore}
        onRowClick={onRowClick}
        onScroll={onScroll}
        tableColumns={tableColumns}
        tableData={tableData}
        renderRowSubComponent={renderRowSubComponent}
      />
    </>
  )
}
export default ClaimsTable

const getTableColumns = (userType: any) =>
  [
    {
      Header: 'Type',
      accessor: 'portfolios',
      Cell: ({ row, value }: any) => {
        const { onClick, toggleProps } = row.getToggleRowExpandedProps({
          style: { padding: 8 },
        })
        const handleClick = (e: any) => {
          e.stopPropagation()
          e.preventDefault()
          onClick(e)
        }

        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              {...toggleProps}
              onClick={handleClick}
              style={{ padding: 8 }}
            >
              {row.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <span style={{ marginRight: 8, width: 10, fontWeight: 600 }}>
              {parseInt(row.id) + 1}
            </span>
            {value.map((portfolio: any) => (
              <PortfolioIcon key={portfolio} portfolio={portfolio} />
            ))}
          </div>
        )
      },
    },
    { Header: 'Ins Ref #', accessor: 'refNumber' },
    { Header: 'Ins Company', accessor: 'companyName' },
    { show: userType === 'Administrator', Header: 'FNOL', accessor: 'fnol' },
    {
      show: userType !== 'Administrator',
      Header: 'Request Date',
      accessor: 'requestDate',
    },
    {
      show: userType !== 'Administrator',
      Header: 'Request',
      accessor: 'request',
    },
    { Header: 'Customer', accessor: 'customerName' },
    { Header: 'Suburb', accessor: 'suburb' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Value', accessor: 'value' },
    {
      show: userType !== 'Administrator',
      Header: 'Status',
      accessor: 'status',
    },
    {
      show: userType === 'Administrator' || userType === 'Restorer',
      Header: 'Builder',
      accessor: 'builder',
    },
    {
      show: userType === 'Administrator',
      Header: 'Building Status',
      accessor: 'buildingStatus',
    },
    {
      show: userType === 'Administrator',
      Header: 'Days',
      accessor: 'daysAtStatus',
    },
    {
      show: userType === 'Administrator' || userType === 'Builder',
      Header: 'Restorer',
      accessor: 'restorer',
    },
    {
      show: userType === 'Administrator',
      Header: 'Restoration Status',
      accessor: 'restorationStatus',
    },
    {
      show: userType === 'Administrator',
      Header: 'Content Status',
      accessor: 'contentsStatus',
    },
  ].filter(column => column.show !== false)
