import { commitLocalUpdate } from "react-relay"
import environment from "./environment"

type AppMetaInput = {
  accessToken?: string | null
  refreshToken?: string | null
  rootRoute?: string | null
  redirectFrom?: string | null
}

export const recoverAppMeta = () => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN')
  const refreshToken = localStorage.getItem('REFRESH_TOKEN')
  const rootRoute = localStorage.getItem('ROOT_ROUTE')
  const redirectFrom = localStorage.getItem('REDIRECT_FROM')
  commitAppMeta({ accessToken, refreshToken, rootRoute, redirectFrom })
}
export const commitAppMeta = ({ accessToken, refreshToken, rootRoute, redirectFrom }: AppMetaInput) => {
  commitLocalUpdate(environment, store => {
    const fieldKey = 'meta'
    const __typename = 'AppMeta'

    const dataID = `client:${__typename}`
    const record = store.get(dataID) ? store.get(dataID) : store.create(dataID, __typename)
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
  })
}