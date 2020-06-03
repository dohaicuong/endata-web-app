import { lazy } from 'react'
import { AppRouteProps } from 'providers/RouteProvider'

const routes: AppRouteProps[] = [
  {
    exact: true,
    path: '/user/login',
    component: lazy(() => import('pages/Login')),
  },
  {
    exact: true,
    path: '/video-call',
    component: lazy(() => import('pages/VideoCall')),
  },

  {
    exact: true,
    private: true,
    path: '/dashboard',
    component: lazy(() => import('pages/Dashboard')),
  },
  {
    exact: true,
    private: true,
    path: '/communicationtasks',
    component: lazy(() => import('pages/Communication')),
  },
  {
    exact: true,
    private: true,
    path: '/media',
    component: lazy(() => import('pages/Media')),
  },
  {
    exact: true,
    private: true,
    path: '/claims',
    component: lazy(() => import('pages/Claims')),
  },
  {
    exact: false,
    private: true,
    path: '/claim/:claimId',
    component: lazy(() => import('pages/Claim')),
  },

  { exact: true, path: '*', component: lazy(() => import('pages/NotFound')) },
]
export default routes
