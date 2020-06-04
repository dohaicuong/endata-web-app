import React from 'react'
import { Paper, Tabs, PaperProps, Tab } from '@material-ui/core'
import { useRouteMatch, useHistory } from 'react-router-dom'

export type TabNavbarProps = PaperProps & {
  tabs: any[]
}
const TabNavbar: React.FC<TabNavbarProps> = ({ tabs, ...props }) => {
  const { url } = useRouteMatch('/claim/:claimId') ?? {}
  const {
    push,
    location: { pathname },
  } = useHistory()

  const pathFromUrl = React.useMemo(() => pathname.split(url ?? '')[1], [
    url,
    pathname,
  ])
  const [activeTab, setActiveTab] = React.useState(pathFromUrl)

  React.useEffect(() => {
    setActiveTab(pathFromUrl)
  }, [pathFromUrl])

  const handleTabChange = (_: any, newValue: string) => {
    push(`${url}${newValue}`)
  }

  return (
    <Paper {...props}>
      <Tabs
        value={activeTab || '/job-info'}
        onChange={handleTabChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map(route => (
          <Tab
            key={route.path}
            label={route.label}
            value={route.path}
            style={{ minWidth: 150 }}
          />
        ))}
      </Tabs>
    </Paper>
  )
}
export default TabNavbar
