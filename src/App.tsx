import React from 'react'
import 'providers/I18N'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import createEnvironment from 'providers/RelayProvider/createEnvironment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import createTheme from './providers/ThemeProvider/theme'

import { SnackbarProvider } from 'notistack'

import { BrowserRouter as Router } from 'react-router-dom'
import RouteProvider from 'providers/RouteProvider'
import { ErrorBoundary } from 'react-error-boundary'
import RouteErrorBoundary from 'components/route/RouteErrorBoundary'
import RouteLoading from 'components/route/RouteLoading'
import routes from 'routes'
import Navbar from 'components/Navbar'
import getTheme, { ThemeName } from 'providers/ThemeProvider/getTheme'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

type AppContextType = {
  resetEnvironment: () => void
  changeTheme: (name: ThemeName) => void
}
const AppContext = React.createContext<AppContextType>({
  resetEnvironment: () => console.log('App is not ready'),
  changeTheme: () => console.log('App is not ready'),
})
export const useAppContext = () => {
  const value = React.useContext(AppContext)
  return value
}

const App = () => {
  const [environment, setEnvironment] = React.useState(createEnvironment())
  const [theme, setTheme] = React.useState(createTheme())

  const resetEnvironment = () => {
    const newEnv = createEnvironment()
    setEnvironment(newEnv)
  }

  const changeTheme = async (name: ThemeName) => {
    const theme = await getTheme(name)
    setTheme(theme)
  }

  return (
    <Router>
      <AppContext.Provider value={{ resetEnvironment, changeTheme }}>
        <RelayEnvironmentProvider environment={environment}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
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
          </MuiPickersUtilsProvider>
        </RelayEnvironmentProvider>
      </AppContext.Provider>
    </Router>
  )
}
export default App
