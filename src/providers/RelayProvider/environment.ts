import { Environment, RecordSource, Store } from 'relay-runtime'

import {
  RelayNetworkLayer,
  urlMiddleware,
  authMiddleware,
  cacheMiddleware,
  retryMiddleware,
} from 'react-relay-network-modern'
import { recoverAppMeta, commitAppMeta } from './commitAppMeta'
import { API_ENDPOINT } from 'configs'

const network = new RelayNetworkLayer(
  [
    cacheMiddleware({
      size: 100,
      ttl: 900000,
    }),
    urlMiddleware({
      url: () => Promise.resolve(API_ENDPOINT),
    }),
    retryMiddleware({
      fetchTimeout: 15000,
      retryDelays: attempt => Math.pow(2, attempt + 4) * 100,
      beforeRetry: ({ forceRetry, abort, delay, attempt }) => {
        if (attempt > 10) abort()
        // @ts-ignore
        window.forceRelayRetry = forceRetry
        console.log(
          `call "forceRelayRetry()" for immediately retry! Or wait ${delay} ms.`
        )
      },
      // TODO: take a look on error status code
      statusCodes: [500, 503, 504],
    }),
    authMiddleware({
      token: () => localStorage.getItem('ACCESS_TOKEN') ?? '',
      tokenRefreshPromise: req => {
        console.log('[client.js] resolve token refresh', req)
        return fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.REFRESH_TOKEN}`,
          },
          body: JSON.stringify({
            query: `
              mutation {
                userRenewToken {
                  refreshToken
                  accessToken
                }
              }
            `,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (!res.data?.userRenewToken) {
              return console.log(`[client.js] ERROR can not refresh token`)
            }

            const { accessToken, refreshToken } = res.data.userRenewToken
            commitAppMeta({ accessToken, refreshToken })
            return res.data.userRenewToken.accessToken
          })
          .catch(error => {
            console.log(`[client.js] ERROR can not refresh token ${error}`)
          })
      },
    }),
  ],
  { noThrow: true }
)

const environment = new Environment({
  network,
  store: new Store(new RecordSource()),
})
export default environment

// init local state data
recoverAppMeta()
