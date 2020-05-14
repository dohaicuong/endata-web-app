import React from 'react'
import { Container, Paper, makeStyles, LinearProgress, Typography, TextField, Button } from '@material-ui/core'
import logo from 'resources/logo.png'

const LoginForm: React.FC = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.root}>
      <Paper>
        <LinearProgress className={classes.progressBar} />
        <div className={classes.innerPaper}>
          <img className={classes.logo} src={logo} alt='ENData Claims' />
          <Typography variant='h4'>
            Log in
          </Typography>
          <Typography variant='body1'>
            with your ENData account
          </Typography>
          <TextField variant='outlined' label='Username' required />
          <TextField variant='outlined' label='Password' required />
          <Button variant='contained' color='primary'>
            Login
          </Button>
        </div>
      </Paper>
    </Container>
  )
}
export default LoginForm

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPaper: {
    padding: theme.spacing(3)
  },
  progressBar: {
    borderRadius: '4px 4px 0 0'
  },
  logo: {
    height: 25
  }
}))