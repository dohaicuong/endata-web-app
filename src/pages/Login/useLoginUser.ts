import React from 'react'
import { commitAppMeta } from 'providers/RelayProvider/commitAppMeta'
import { useRelayEnvironment } from 'react-relay/hooks'
// import { useMutation } from 'react-relay/hooks'
// import { graphql } from 'babel-plugin-relay/macro'

export type useLoginUserProps = {
  token?: string | null
  redirect_from?: string | null
}
const useLoginUser = ({ token, redirect_from }: useLoginUserProps) => {
  const environment = useRelayEnvironment()

  React.useEffect(() => {
    if (redirect_from) {
      commitAppMeta(environment, { redirectFrom: redirect_from })
    }
  }, [redirect_from, environment])

  // const [] = useMutation(graphql``)
  React.useEffect(() => {
    if (token) {
      // commitAppMeta({ refreshToken: token })
      console.log(token)
    }
  }, [token])

  return null
}
export default useLoginUser
