import React from 'react'
import {
  Container,
  Paper,
  makeStyles,
  LinearProgress,
  Typography,
  Button,
  Grid,
} from '@material-ui/core'
import logo from 'resources/logo.png'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { useMutation } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import {
  LoginFormMutation,
  UserCredential,
} from './__generated__/LoginFormMutation.graphql'
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom'
import { commitAppMeta } from 'providers/RelayProvider/commitAppMeta'

const LoginForm: React.FC = () => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useHistory()
  const [loginMutate, isOnFly] = useMutation<LoginFormMutation>(graphql`
    mutation LoginFormMutation($input: UserCredential!) {
      userAuthenticateAllServer(input: $input) {
        accessToken
        refreshToken
        user {
          userName
          privileges {
            menus {
              nodeName
            }
          }
        }
      }
    }
  `)

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper>
        {isOnFly && <LinearProgress className={classes.progressBar} />}
        <div className={classes.innerPaper}>
          <img className={classes.logo} src={logo} alt="ENData Claims" />
          <Typography variant="h4" className={classes.title}>
            Log in
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            with your ENData account
          </Typography>
          <Formik
            initialValues={{
              userLogin: '',
              password: '',
            }}
            validate={values => {
              const errors: Partial<UserCredential> = {}
              if (!values.userLogin) errors.userLogin = 'Required'
              if (!values.password) errors.password = 'Required'
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                loginMutate({
                  variables: { input: values },
                  onCompleted: (res, errors) => {
                    if (errors)
                      return errors.forEach(error => {
                        enqueueSnackbar(error.message, { variant: 'error' })
                      })

                    if (
                      res.userAuthenticateAllServer &&
                      res.userAuthenticateAllServer[0]
                    ) {
                      const {
                        accessToken,
                        refreshToken,
                        user,
                      } = res.userAuthenticateAllServer[0]

                      const availableRoutes =
                        user?.privileges?.menus?.map(menu =>
                          menu?.nodeName.toLowerCase()
                        ) ?? []
                      const [rootRoute] = [
                        'dashboard',
                        'communicationtasks',
                        'media',
                        'claims',
                      ].filter(route => availableRoutes.includes(route))

                      enqueueSnackbar(`Welcome, ${user?.userName ?? ''}`, {
                        variant: 'success',
                      })
                      commitAppMeta({ accessToken, refreshToken, rootRoute })
                      push(`/claims`)
                    }

                    setSubmitting(false)
                  },
                })
              }, 500)
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    label="Username"
                    name="userLogin"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={TextField}
                    type="password"
                    label="Password"
                    name="password"
                    required
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} className={classes.loginBtnRow}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isOnFly}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
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
    padding: theme.spacing(3),
  },
  progressBar: {
    borderRadius: '4px 4px 0 0',
  },
  logo: {
    height: 25,
    display: 'block',
    margin: `${theme.spacing(2)}px auto`,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  loginBtnRow: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
