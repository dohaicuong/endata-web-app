import { lazy } from 'react'
import { AppRouteProps } from 'providers/RouteProvider'

const routes: AppRouteProps[] = [
  {
    exact: true,
    path: '/user/login',
    component: lazy(() =>
      import(/* webpackChunkName: "LoginPage" */ 'pages/Login')
    ),
  },
  {
    exact: true,
    path: '/video-call',
    component: lazy(() =>
      import(/* webpackChunkName: "VideoCallPage" */ 'pages/VideoCall')
    ),
  },

  {
    exact: true,
    private: true,
    path: '/dashboard',
    component: lazy(() =>
      import(/* webpackChunkName: "DashboardPage" */ 'pages/Dashboard')
    ),
  },
  {
    exact: true,
    private: true,
    path: '/communicationtasks',
    component: lazy(() =>
      import(/* webpackChunkName: "CommunicationPage" */ 'pages/Communication')
    ),
  },
  {
    exact: true,
    private: true,
    path: '/media',
    component: lazy(() =>
      import(/* webpackChunkName: "MediaPage" */ 'pages/Media')
    ),
  },
  {
    exact: true,
    private: true,
    path: '/claims',
    component: lazy(() =>
      import(/* webpackChunkName: "ClaimListPage" */ 'pages/ClaimList')
    ),
  },
  {
    exact: false,
    private: true,
    path: '/claim/:claimId',
    component: lazy(() =>
      import(/* webpackChunkName: "ClaimPage" */ 'pages/Claim')
    ),
  },
  {
    exact: false,
    private: true,
    path: '/add-claim',
    component: lazy(() =>
      import(/* webpackChunkName: "AddClaimPage" */ 'pages/ClaimAdd')
    ),
  },

  {
    exact: false,
    private: true,
    path: '/settings',
    component: lazy(() =>
      import(/* webpackChunkName: "SettingsPage" */ 'pages/Settings')
    ),
  },

  {
    exact: true,
    path: '*',
    component: lazy(() =>
      import(/* webpackChunkName: "NotFoundPage" */ 'pages/NotFound')
    ),
  },
]
export default routes
