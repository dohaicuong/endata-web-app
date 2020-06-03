import { commitLocalUpdate } from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { getRequest, createOperationDescriptor } from 'relay-runtime'

type AppMetaInput = {
  accessToken?: string | null
  refreshToken?: string | null
  rootRoute?: string | null
  redirectFrom?: string | null
}

export const recoverAppMeta = (environment: any): void => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN')
  const refreshToken = localStorage.getItem('REFRESH_TOKEN')
  const rootRoute = localStorage.getItem('ROOT_ROUTE')
  const redirectFrom = localStorage.getItem('REDIRECT_FROM')
  commitAppMeta(environment, {
    accessToken,
    refreshToken,
    rootRoute,
    redirectFrom,
  })
}
export const commitAppMeta = (
  environment: any,
  { accessToken, refreshToken, rootRoute, redirectFrom }: AppMetaInput
): void => {
  commitLocalUpdate(environment, store => {
    const fieldKey = 'meta'
    const __typename = 'AppMeta'

    const dataID = `client:${__typename}`
    const record = store.get(dataID)
      ? store.get(dataID)
      : store.create(dataID, __typename)
    if (!record) return console.log('some kind of error on relay')

    if (accessToken) {
      record.setValue(accessToken, 'accessToken')
      localStorage.setItem('ACCESS_TOKEN', accessToken)
    }
    if (refreshToken) {
      record.setValue(refreshToken, 'refreshToken')
      localStorage.setItem('REFRESH_TOKEN', refreshToken)
    }
    if (rootRoute) {
      record.setValue(rootRoute, 'rootRoute')
      localStorage.setItem('ROOT_ROUTE', rootRoute)
    }
    if (redirectFrom) {
      record.setValue(redirectFrom, 'redirectFrom')
      localStorage.setItem('REDIRECT_FROM', redirectFrom)
    }

    store.getRoot().setLinkedRecord(record, fieldKey)

    const request = getRequest(graphql`
      query commitAppMetaQuery {
        ... on Query {
          __typename
          meta {
            accessToken
            refreshToken
            rootRoute
            redirectFrom
          }
        }
      }
    `)
    const operation = createOperationDescriptor(request, {})
    const disposable = environment.retain(operation)
    return disposable.dispose
  })
}
