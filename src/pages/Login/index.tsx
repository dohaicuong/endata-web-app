import React from 'react'
import { Redirect } from 'react-router-dom'
import useQueryString from 'hooks/useQueryString'

import useLoginUser from './useLoginUser'
import LoginForm from './LoginForm'

// match /user/login
// if /user/login?token=''&redirect_from='' login with token
// otherwise render login form
const LoginPage: React.FC = () => {
  // login and redirect user in if they got token from somewhere else
  const { token, redirect_from } = useQueryString()
  useLoginUser({
    token: token as string,
    redirect_from: redirect_from as string,
  })
  if (token) return null

  const storedToken = localStorage.getItem('ACCESS_TOKEN')
  if (storedToken) return <Redirect to="/" />

  return <LoginForm />
}
export default LoginPage
