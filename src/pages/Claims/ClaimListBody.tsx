import React from 'react'
import { usePaginationFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimListPaginationQuery } from './__generated__/ClaimListPaginationQuery.graphql'
import { ClaimListBody_claims$key } from './__generated__/ClaimListBody_claims.graphql'
import { useHistory } from 'react-router-dom'
import { Grid, Container, IconButton } from '@material-ui/core'
import Info from 'components/Info'
import Table from 'components/Table'
import PortfolioIcon from 'components/PortfolioIcon'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

type ClaimList = {
  claims: ClaimListBody_claims$key | null
  currentUser: any
  loading: boolean
  where: any
}
const ClaimListBody: React.FC<ClaimList> = ({
  where,
  currentUser,
  ...props
}) => {
  const { data, loadNext, refetch } = usePaginationFragment<
    ClaimListPaginationQuery,
    ClaimListBody_claims$key
  >(
    graphql`
      fragment ClaimListBody_claims on Query
        @refetchable(queryName: "ClaimListPaginationQuery") {
        claimJobs(first: $count, after: $cursor, where: $where)
          @connection(key: "ClaimListBody_query_claimJobs") {
          totalCount
          edges {
            node {
              id
              # portfolio
              hasBuilding
              hasContents
              hasRestoration

              # ins ref #
              refNumber
              # ins company
              insurer {
                companyName
              }
              # fnol
              lodgeDate
              # request date, request
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

              # customer
              insured {
                name
              }
              # suburb, state
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
              }
              building {
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
              }
              building {
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
              }
              contents {
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
              }
              restoration {
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

              # Restorer
              restoration {
                authorisedSupplier {
                  companyName
                }
                scopingSupplier {
                  companyName
                }
              }

              # building status
              building {
                claimStatus {
                  statusName
                }
              }
              # days
              building {
                daysAtStatus
              }
              # restoration status
              restoration {
                claimStatus {
                  statusName
                }
              }
              # content status
              contents {
                claimStatus {
                  statusName
                }
              }

              # subRows
              refNumber
              insured {
                name
                phone1
                phone2
                phone3
                email
              }

              incidentDetail {
                incidentDate
                riskAddress {
                  line1
                  suburb
                  state
                  postcode
                }
              }
            }
          }
        }
      }
    `,
    props.claims
  )

  React.useMemo(() => {
    refetch({ where: where }, { fetchPolicy: 'store-or-network' })
  }, [where, refetch])

  const { push } = useHistory()
  const columns = useClaimListColumns(data, currentUser)

  const [isFetchingMore, setIsFetchingMore] = React.useState(false)
  const onScroll = async ({
    target: { scrollTop, offsetHeight, scrollHeight },
  }: any) => {
    const fetchOffset = 150
    const scrollPosition = scrollTop + offsetHeight - 5

    if (scrollHeight - scrollPosition < fetchOffset && !isFetchingMore) {
      setIsFetchingMore(true)
      await loadNext(20)
      setIsFetchingMore(false)
    }
  }

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

  const onRowClick = (row: any) => {
    const claimId = row.original.id
    push(`/claim/${claimId}/job-info`)
  }

  const mappedData = data?.claimJobs?.edges?.map(edge => edge?.node)
  const totalCount = data?.claimJobs?.totalCount
  return (
    <Container maxWidth="xl" style={{ position: 'relative', height: '750px' }}>
      <Table
        loadingMore={isFetchingMore}
        columns={columns}
        data={mappedData}
        user={currentUser}
        totalCount={totalCount}
        renderRowSubComponent={renderRowSubComponent}
        onRowClick={onRowClick}
        onScroll={onScroll}
      />
    </Container>
  )
}
export default ClaimListBody

const useClaimListColumns = (data: any, currentUser: any) => {
  const userType = currentUser?.userType ?? null
  const columns = React.useMemo(
    () => [
      {
        Header: 'Type',
        accessor: 'hasBuilding',
        Cell: ({ cell: { row } }: any) => {
          const { _portfolios } = row.original

          const { onClick, toggleProps } = row.getToggleRowExpandedProps({
            style: { padding: 8 },
          })
          const props = {
            ...toggleProps,
            onClick: (e: any) => {
              e.stopPropagation()
              e.preventDefault()
              onClick(e)
            },
          }

          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton {...props} style={{ padding: 8 }}>
                {row.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <span style={{ marginRight: 8, width: 10, fontWeight: 600 }}>
                {row.index + 1}
              </span>
              {_portfolios.map((portfolio: any) => (
                <PortfolioIcon key={portfolio} portfolio={portfolio} />
              ))}
            </div>
          )
        },
      },
      { Header: 'Ins Ref #', accessor: 'refNumber' },
      { Header: 'Ins Company', accessor: 'insurer.companyName' },
      {
        show: userType === 'Administrator',
        Header: 'FNOL',
        accessor: 'lodgeDate',
      },
      {
        show: userType !== 'Administrator',
        Header: 'Request Date',
        accessor: '_requestDate',
      },
      {
        show: userType !== 'Administrator',
        Header: 'Request',
        accessor: '_request',
      },
      { Header: 'Customer', accessor: 'insured.name' },
      { Header: 'Suburb', accessor: 'incidentDetail.riskAddress.suburb' },
      { Header: 'State', accessor: 'incidentDetail.riskAddress.state' },
      { Header: 'Value', accessor: '_claimValue' },
      {
        show: userType !== 'Administrator',
        Header: 'Status',
        accessor: '_claimStatus',
      },
      {
        show: userType === 'Administrator' || userType === 'Restorer',
        Header: 'Builder',
        accessor: '_claimBuilder',
      },
      {
        show: userType === 'Administrator',
        Header: 'Building Status',
        accessor: 'building.claimStatus.statusName',
      },
      {
        show: userType === 'Administrator',
        Header: 'Days',
        accessor: 'building.daysAtStatus',
      },
      {
        show: userType === 'Administrator' || userType === 'Builder',
        Header: 'Restorer',
        accessor: '_claimRestorer',
      },
      {
        show: userType === 'Administrator',
        Header: 'Restoration Status',
        accessor: 'restoration.claimStatus.statusName',
      },
      {
        show: userType === 'Administrator',
        Header: 'Content Status',
        accessor: 'contents.claimStatus.statusName',
      },
    ],
    [userType]
  )

  return columns
}
