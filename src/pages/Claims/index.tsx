import React from 'react'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimsPageClaimQuery } from './__generated__/ClaimsPageClaimQuery.graphql'
import ClaimFloatActions from './ClaimFloatActions'
import ClaimList from './ClaimList'

const ClaimsPage: React.FC = () => {
  const [keyWords, setKeyWords] = React.useState('')

  const data = useLazyLoadQuery<ClaimsPageClaimQuery>(
    graphql`
      query ClaimsPageClaimQuery(
        $where: ClaimJobFilter
        $count: Int!
        $cursor: String!
      ) {
        ...ClaimList_claims
      }
    `,
    {
      count: 5,
      cursor: '',
      where: {
        keyWords,
      },
    },
    {
      fetchPolicy: 'store-and-network',
    }
  )

  return (
    <>
      <input value={keyWords} onChange={e => setKeyWords(e.target.value)} />
      <ClaimList claims={data} />
      <ClaimFloatActions />
    </>
  )
}
export default ClaimsPage
