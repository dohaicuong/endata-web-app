import React from 'react'
import {
  useParams,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { ClaimPageQuery } from './__generated__/ClaimPageQuery.graphql'
import ClaimInfoCard from './ClaimInfoCard'
import { Container } from '@material-ui/core'
import { ErrorBoundary } from 'react-error-boundary'
import TabNavbar from './TabNavbar'
import TabLoading from 'components/route/TabLoading'
import { tabs } from './tabSections/tabs'

const ClaimPage: React.FC = () => {
  const { claimId } = useParams()
  const { isExact, url } = useRouteMatch('/claim/:claimId') ?? {}
  const { push } = useHistory()
  React.useEffect(() => {
    if (isExact) push(`${url}/job-info`)
  }, [isExact, url, push])
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
          <TabNavbar tabs={tabs} />
          <React.Suspense fallback={<TabLoading />}>
            <Switch>
              {tabs.map(({ path, ...tab }) => (
                <Route key={path} path={`${url}${path}`} {...tab} />
              ))}
            </Switch>
          </React.Suspense>
        </Container>
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default ClaimPage
