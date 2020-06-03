import React from 'react'
import { AppBar, Toolbar, makeStyles, Container } from '@material-ui/core'
import { useLazyLoadQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import { NavbarQuery } from './__generated__/NavbarQuery.graphql'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const classes = useStyles()

  const data = useLazyLoadQuery<NavbarQuery>(
    graphql`
      query NavbarQuery {
        me {
          ...LeftSide_data
          ...RightSide_data
        }
      }
    `,
    {}
  )

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftSide}>
            <LeftSide data={data.me} />
          </div>
          <div className={classes.rightSide}>
            <RightSide data={data.me} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
const useStyles = makeStyles(() => ({
  toolbar: {
    minHeight: 48,
    height: 48,
  },
  leftSide: {
    marginRight: 'auto',
    height: '100%',
  },
  rightSide: {
    marginLeft: 'auto',
    height: '100%',
    display: 'flex',
  },
}))

const NavbarWrapper = () => {
  const { pathname } = useLocation()
  const storedToken = React.useMemo(() => {
    return localStorage.getItem('ACCESS_TOKEN')
    // eslint-disable-next-line
  }, [pathname])
  if (!storedToken) return null

  return <Navbar />
}
export default NavbarWrapper
