import React from 'react'
import { useAppContext } from 'App'

const Settings = () => {
  const { changeTheme } = useAppContext()

  return (
    <>
      <button onClick={() => changeTheme('Sophia')}>Sophia</button>
      <button onClick={() => changeTheme('Jade')}>Jade</button>
    </>
  )
}
export default Settings
