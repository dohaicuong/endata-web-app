import { lazy } from 'react'

export type TabProps = {
  claimId: string
}
export const tabs = [
  {
    label: 'Job Info',
    path: '/job-info',
    component: 'JobInfo',
  },
  {
    label: 'Job Notes',
    path: '/job-notes',
    component: 'JobNotes',
  },
  {
    label: 'Report',
    path: '/report',
    component: 'Report',
  },
  {
    label: 'Documents',
    path: '/documents',
    component: 'Documents',
  },
  {
    label: 'Communications',
    path: '/communications',
    component: 'Communications',
  },
  {
    label: 'Variations',
    path: '/variations',
    component: 'Variations',
  },
  {
    label: 'Loss adjuster',
    path: '/loss-adjuster',
    component: 'LossAdjuster',
  },
].map(({ component, ...args }) => ({
  ...args,
  component: lazy(() => import(`./${component}`)),
}))
