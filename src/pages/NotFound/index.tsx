import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  const token = localStorage.getItem('ACCESS_TOKEN')

  const { push } = useHistory()
  React.useEffect(() => {
    if (!token) push('/user/login')
    else push('/claims')
  }, [token, push])

  return <>Not found 404</>
}
export default NotFound
