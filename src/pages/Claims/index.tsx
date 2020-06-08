import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimsPageClaimQuery } from './__generated__/ClaimsPageClaimQuery.graphql'
import { Link } from 'react-router-dom'
import ClaimFloatActions from './ClaimFloatActions'

const ClaimsPage: React.FC = () => {
  const data = useLazyLoadQuery<ClaimsPageClaimQuery>(
    graphql`
      query ClaimsPageClaimQuery {
        claimJobs(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
    {},
    {
      fetchPolicy: 'store-and-network',
    }
  )

  return (
    <>
      <ul>
        {data.claimJobs?.edges?.map(edge => (
          <li key={edge?.node?.id}>
            <Link to={`/claim/${edge?.node?.id}`}>{edge?.node?.id}</Link>
          </li>
        ))}
      </ul>
      <ClaimFloatActions />
    </>
  )
}
export default ClaimsPage
