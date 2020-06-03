import React from 'react'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import createEnvironment from 'providers/RelayProvider/createEnvironment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './providers/ThemeProvider/theme'

import { SnackbarProvider } from 'notistack'

import { BrowserRouter as Router } from 'react-router-dom'
import RouteProvider from 'providers/RouteProvider'
import { ErrorBoundary } from 'react-error-boundary'
import RouteErrorBoundary from 'components/route/RouteErrorBoundary'
import RouteLoading from 'components/route/RouteLoading'
import routes from 'routes'
import Navbar from 'components/Navbar'

type AppContextType = {
  resetEnvironment?: () => void
}
const AppContext = React.createContext<AppContextType>({})
export const useAppContext = () => {
  const value = React.useContext(AppContext)
  return value
}

const App = () => {
  const [environment, setEnvironment] = React.useState(createEnvironment())
  const resetEnvironment = () => {
    const newEnv = createEnvironment()
    setEnvironment(newEnv)
  }

  return (
    <Router>
      <AppContext.Provider value={{ resetEnvironment }}>
        <RelayEnvironmentProvider environment={environment}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <SnackbarProvider
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              autoHideDuration={1500}
            >
              <ErrorBoundary FallbackComponent={RouteErrorBoundary}>
                <React.Suspense fallback={<RouteLoading />}>
                  <Navbar />
                  <React.Suspense fallback={<RouteLoading />}>
                    <RouteProvider routes={routes} />
                  </React.Suspense>
                </React.Suspense>
              </ErrorBoundary>
            </SnackbarProvider>
          </ThemeProvider>
        </RelayEnvironmentProvider>
      </AppContext.Provider>
    </Router>
  )
}
export default App
