import { lazy } from 'react'

export const tabs = [
  {
    label: 'Job Info',
    path: '/job-info',
    component: lazy(() => import('./JobInfo')),
  },
  {
    label: 'Job Notes',
    path: '/job-notes',
    component: lazy(() => import('./JobNotes')),
  },
  {
    label: 'Report',
    path: '/report',
    component: lazy(() => import('./Report')),
  },
  {
    label: 'Communications',
    path: '/communications',
    component: lazy(() => import('./Communications')),
  },
]
