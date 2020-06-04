import React from 'react'
import { useFragment } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { LeftSide_data$key } from './__generated__/LeftSide_data.graphql'
import { makeStyles, Button } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined'
import { Link, useLocation } from 'react-router-dom'

const routes = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Claims', path: '/claims', icon: <VerticalSplitIcon /> },
  {
    label: 'Reports',
    path: '/reports',
    icon: <InsertChartOutlinedIcon />,
    href: 'https://reports.claims.endataclaims.com/',
  },
]

type LeftSideProps = {
  data: LeftSide_data$key | null
}
const LeftSide: React.FC<LeftSideProps> = props => {
  const classes = useStyles()
  const data = useFragment(
    graphql`
      fragment LeftSide_data on User {
        company {
          customisation {
            companyLogo: displayCompanyLogo
          }
        }
        privileges {
          menus {
            nodeName
          }
        }
      }
    `,
    props.data
  )

  const location = useLocation()

  const companyLogo = data?.company?.customisation?.companyLogo
  const allowedRoutes = data?.privileges?.menus?.map(menu => {
    return `/${menu?.nodeName.toLowerCase()}`
  })
  const filteredRoutes = routes.filter(route => {
    return allowedRoutes?.includes(route.path)
  })
  return (
    <>
      {companyLogo && (
        <img
          className={classes.companyLogo}
          src={companyLogo}
          alt="ENData Claims"
        />
      )}
      {filteredRoutes.map(route => (
        <Button
          key={route.path}
          startIcon={route.icon}
          color="inherit"
          size="large"
          className={`${classes.routeButton} ${
            route.path.includes(location.pathname)
              ? classes.routeButtonActive
              : ''
          }`}
          component={route.href ? 'a' : Link}
          to={route.path}
          href={route.href}
          target={route.href ? '_blank' : undefined}
        >
          {route.label}
        </Button>
      ))}
    </>
  )
}
export default LeftSide

const useStyles = makeStyles(() => ({
  companyLogo: {
    marginRight: 8,
  },
  routeButton: {
    height: '100%',
  },
  routeButtonActive: {
    background: 'rgba(0,0,0, 0.3)',
  },
}))
