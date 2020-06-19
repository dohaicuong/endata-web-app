import React from 'react'
import { graphql } from 'babel-plugin-relay/macro'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { CommunicationQuery } from './__generated__/CommunicationQuery.graphql'

import FilterInputGroup from 'dataComponents/FilterInputGroup'
import { ErrorBoundary } from 'react-error-boundary'
import { Container, CircularProgress } from '@material-ui/core'
import CommunicationListTable from './CommunicationListTable'

const Communication: React.FC = () => {
  const defaultWhere = {
    acknowledged: false,
    // boxes: ['Inbox'],
  }
  const [where, setWhere] = React.useState(defaultWhere)

  const data = useLazyLoadQuery<CommunicationQuery>(
    graphql`
      query CommunicationQuery($where: CommunicationFilter) {
        currentUser {
          communicationFilters {
            ...FilterInput_data
          }
        }
        ...CommunicationListTable_data @arguments(where: $where)
      }
    `,
    {
      where: defaultWhere,
    }
  )

  return (
    <ErrorBoundary fallback={<>Dashboard Error</>}>
      <React.Suspense
        fallback={
          <CircularProgress
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          />
        }
      >
        <FilterInputGroup
          filters={data.currentUser?.communicationFilters}
          onChange={values => setWhere({ ...defaultWhere, ...values })}
        />
      </React.Suspense>
      <Container
        maxWidth="xl"
        // 100vh - navbarHeight - filterHeight - totalRowHeight - top/bottom margin
        style={{
          height: 'calc(100vh - 48px - 88px - 28px - 16px)',
          marginTop: 8,
        }}
      >
        <React.Suspense
          fallback={
            <CircularProgress
              style={{ position: 'absolute', top: '50%', left: '50%' }}
            />
          }
        >
          <CommunicationListTable data={data} where={where} />
        </React.Suspense>
      </Container>
    </ErrorBoundary>
  )
}
export default Communication
