import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import environment from 'providers/RelayProvider/environment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './providers/ThemeProvider/theme'

import { SnackbarProvider } from 'notistack'

import RouteProvider from 'providers/RouteProvider'
import { ErrorBoundary } from 'react-error-boundary'
import RouteErrorBoundary from 'providers/RouteProvider/RouteErrorBoundary'
import RouteLoading from 'providers/RouteProvider/RouteLoading'
import routes from 'routes'

const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(
  <RelayEnvironmentProvider environment={environment}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={1500}
      >
        <ErrorBoundary FallbackComponent={RouteErrorBoundary}>
          <React.Suspense fallback={<RouteLoading />}>
            <RouteProvider routes={routes} />
          </React.Suspense>
        </ErrorBoundary>
      </SnackbarProvider>
    </ThemeProvider>
  </RelayEnvironmentProvider>
)

serviceWorker.unregister()