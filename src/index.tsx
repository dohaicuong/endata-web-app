import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

import App from 'App'
const root = document.getElementById('root') as HTMLElement

ReactDOM.unstable_createRoot(root).render(<App />)
serviceWorker.unregister()
