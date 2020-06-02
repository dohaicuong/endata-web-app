import React from 'react'
import { useParams } from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimPageQuery } from './__generated__/ClaimPageQuery.graphql'

const ClaimPage: React.FC = () => {
  const { claimId } = useParams()
  const data = useLazyLoadQuery<ClaimPageQuery>(
    graphql`
      query ClaimPageQuery($where: ENDataEntityKey!) {
        claimJob(where: $where) {
          id
          description: claimDescription
        }
      }
    `,
    {
      where: {
        id: claimId
      }
    }
  )
  console.log(data)

  return (
    <>
      Claim page
    </>
  )
}

export default ClaimPage