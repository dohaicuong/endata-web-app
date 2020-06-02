import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimsPageClaimQuery } from './__generated__/ClaimsPageClaimQuery.graphql'

const ClaimsPage: React.FC = () => {
  const data = useLazyLoadQuery<ClaimsPageClaimQuery>(
    graphql`
      query ClaimsPageClaimQuery {
        claimJobs(first: 10) {
          edges { node { id }}
        }
        meta {
          accessToken
          refreshToken
          rootRoute
          redirectFrom
        }
      }
    `,
    {}
  )

  console.log(data)

  return (
    <>Claims</>
  )
}
export default ClaimsPage