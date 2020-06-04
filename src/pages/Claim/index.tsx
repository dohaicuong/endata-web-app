import React from 'react'
import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimPageQuery } from './__generated__/ClaimPageQuery.graphql'
import ClaimInfoCard from './ClaimInfoCard'
import { Container } from '@material-ui/core'
import { ErrorBoundary } from 'react-error-boundary'

const ClaimPage: React.FC = () => {
  const { claimId } = useParams()
  const data = useLazyLoadQuery<ClaimPageQuery>(
    graphql`
      query ClaimPageQuery($where: ENDataEntityKey!) {
        claimJob(where: $where) {
          id
          description: claimDescription
          ...ClaimInfoCard_info
        }
        currentUser {
          ...ClaimInfoCard_user
        }
      }
    `,
    {
      where: {
        id: claimId,
      },
    }
  )

  return (
    <ErrorBoundary fallback={<>Claim Error</>}>
      <React.Suspense fallback="Claim loading...">
        <Container maxWidth="xl">
          <ClaimInfoCard info={data.claimJob} user={data.currentUser} />
        </Container>
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default ClaimPage
