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
import RouteErrorBoundary from 'components/route/RouteErrorBoundary'
import ActionProvider from './actions'

const ClaimPage: React.FC = () => {
  const { claimId } = useParams()
  const { isExact, url } = useRouteMatch('/claim/:claimId') ?? {}
  const { push } = useHistory()
  React.useEffect(() => {
    if (isExact) push(`${url}/job-info`)
  }, [isExact, url, push])

  // const [companyId, setCompanyId] = React.useState([''])
  const data = useLazyLoadQuery<ClaimPageQuery>(
    graphql`
      query ClaimPageQuery($where: ENDataEntityKey!) {
        claimJob(where: $where) {
          id
          ...ClaimInfoCard_info
          ...JobInfo_claim
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
      // companyId,
    }
  )

  // const insurerId = String(data.claimJob?.insurer?.companyId ?? 0)
  // React.useEffect(() => {
  //   if (insurerId) setCompanyId([insurerId])
  // }, [insurerId])

  return (
    <ErrorBoundary fallback={<>Claim Error</>}>
      <React.Suspense fallback="Claim loading...">
        <Container maxWidth="xl">
          <ClaimInfoCard info={data.claimJob} user={data.currentUser} />
          <TabNavbar style={{ marginTop: 8 }} tabs={tabs} />
          <ErrorBoundary FallbackComponent={RouteErrorBoundary}>
            <React.Suspense fallback={<TabLoading />}>
              <ActionProvider>
                <Switch>
                  {tabs.map(({ path, component: Comp, ...tab }) => (
                    <Route
                      key={path}
                      path={`${url}${path}`}
                      {...tab}
                      render={props => (
                        <Comp
                          {...props}
                          claimId={claimId}
                          claim={data.claimJob}
                        />
                      )}
                    />
                  ))}
                </Switch>
              </ActionProvider>
            </React.Suspense>
          </ErrorBoundary>
        </Container>
      </React.Suspense>
    </ErrorBoundary>
  )
}

export default ClaimPage
