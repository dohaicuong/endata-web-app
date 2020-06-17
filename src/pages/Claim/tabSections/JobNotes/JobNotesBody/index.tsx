import React from 'react'

import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment } from 'react-relay/hooks'
import { JobNotesBodyPaginationQuery, PortfolioType } from './__generated__/JobNotesBodyPaginationQuery.graphql'
import { JobNotesBody_data$key } from './__generated__/JobNotesBody_data.graphql'

type JobNotesBody = {
  portfolio?: PortfolioType
  data: JobNotesBody_data$key | null
}
const JobNotesBody: React.FC<JobNotesBody> = props => {
  const { data, refetch } = usePaginationFragment<
    JobNotesBodyPaginationQuery,
    JobNotesBody_data$key
  >(
    graphql`
      fragment JobNotesBody_data on Query
      @refetchable(queryName: "JobNotesBodyPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 30 }
        cursor: { type: "String", defaultValue: null }
        claimId: { type: "ID!" }
        portfolios: { type: "[PortfolioType]", defaultValue: null }
      )
      {
        jobNoteConnection: claimNotes(
          first: $count
          after: $cursor
          where: {
            claimId: $claimId
            portfolios: $portfolios
          }
        )
        @connection(
          key: "JobNotesBody_data_jobNoteConnection"
          filters: ["claimId", "portfolios"]
        )
        {
          edges {
            node {
              portfolioType
            }
          }
        }
      }
    `,
    props.data
  )

  const selectedPortfolio = props.portfolio || null
  React.useEffect(() => {
    if(selectedPortfolio) refetch({ portfolios: [selectedPortfolio] })
    else refetch({ portfolios: ['Building', 'Contents', 'Restoration'] })
  }, [selectedPortfolio, refetch])

  return <>JobNotesBody</>
}
export default JobNotesBody
