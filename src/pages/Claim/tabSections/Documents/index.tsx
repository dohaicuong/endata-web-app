import React from 'react'
import { Grid } from '@material-ui/core'
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter'
import DocumentsAction from './DocumentsAction'
import DocumentsBody from './DocumentsBody'
import { PortfolioType } from './__generated__/DocumentsBodyPaginationQuery.graphql'

import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { DocumentsQuery } from './__generated__/DocumentsQuery.graphql'

type DocumentsProps = {
  claimId: string
}
const Documents: React.FC<DocumentsProps> = props => {
  const [portfolio, setPortfolio] = React.useState<PortfolioType | undefined>()
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']

  const data = useLazyLoadQuery<DocumentsQuery>(
    graphql`
      query DocumentsQuery($claimId: ID!) {
        ...DocumentsBody_data @arguments(claimId: $claimId)
        ...DocumentsAction_data
      }
    `,
    { claimId: props.claimId }
  )

  return (
    <>
      <DocumentsAction data={data} />
      <Grid container style={{ marginTop: 8 }}>
        <Grid item>
          <PortfolioFilter
            isSelectAll
            portfolios={portfolios}
            value={portfolio}
            setValue={setPortfolio}
          />
        </Grid>
        <Grid item xs>
          <React.Suspense fallback="Loading...">
            <DocumentsBody data={data} portfolio={portfolio} />
          </React.Suspense>
        </Grid>
      </Grid>
    </>
  )
}
export default Documents
