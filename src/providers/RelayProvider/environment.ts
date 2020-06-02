import { Environment, RecordSource, Store } from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
} from 'react-relay-network-modern'
import { recoverAppMeta } from './commitAppMeta'

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: (req) => Promise.resolve('https://videotest.endataclaims.com/midgard/graphql'),
    }),
    authMiddleware({
      token: () => localStorage.getItem('ACCESS_TOKEN') ?? '',
    })
  ],
  { noThrow: true }
)

const environment = new Environment({
  network,
  store: new Store(new RecordSource())
})
export default environment

// init local state data
recoverAppMeta()