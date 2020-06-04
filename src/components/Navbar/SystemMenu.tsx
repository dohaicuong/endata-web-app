import React from 'react'
import { useRelayEnvironment } from 'react-relay/hooks'
import { IconButton, Menu, MenuItem, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import SettingsIcon from '@material-ui/icons/Settings'
import { useHistory, Link } from 'react-router-dom'
import { commitAppMeta } from 'providers/RelayProvider/commitAppMeta'

const SystemMenu = () => {
  const classes = useStyles()
  const { push } = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event: any) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const environment = useRelayEnvironment()

  const handleLogout = () => {
    handleClose()
    localStorage.clear()
    commitAppMeta(environment, { accessToken: null, refreshToken: null })
    push('/user/login')
  }

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/settings">
          <SettingsIcon className={classes.itemIcon} />
          <div className={classes.itemText}>User Settings</div>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <PowerSettingsNewIcon className={classes.itemIcon} />
          <div className={classes.itemText}>Logout</div>
        </MenuItem>
      </Menu>
    </>
  )
}
export default SystemMenu

const useStyles = makeStyles(theme => ({
  itemIcon: {
    marginRight: theme.spacing(2),
    // color: theme.palette.text.hint,
  },
  itemText: {
    // color: theme.palette.text.hint,
  },
}))
