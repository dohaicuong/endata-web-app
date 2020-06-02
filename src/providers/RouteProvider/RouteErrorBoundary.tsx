import React from 'react'
import { FallbackProps } from 'react-error-boundary'

const RouteErrorBoundary: React.FC<FallbackProps> = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
export default RouteErrorBoundary
