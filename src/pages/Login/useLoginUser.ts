import React from 'react'
import { commitAppMeta } from 'providers/RelayProvider/commitAppMeta'
// import { useMutation } from 'react-relay/hooks'
// import { graphql } from 'babel-plugin-relay/macro'

export type useLoginUserProps = {
  token?: string | null
  redirect_from?: string | null
}
const useLoginUser = ({ token, redirect_from }: useLoginUserProps) => {
  React.useEffect(() => {
    if (redirect_from) commitAppMeta({ redirectFrom: redirect_from })
  }, [redirect_from])

  // const [] = useMutation(graphql``)
  React.useEffect(() => {
    if(token) {
      // commitAppMeta({ refreshToken: token })
      console.log(token)
    }
  }, [token])

  return null
}
export default useLoginUser