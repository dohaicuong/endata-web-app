import React from 'react'
import { useAppContext } from 'App'
import { useTranslation } from 'react-i18next'

const Settings = () => {
  const { changeTheme } = useAppContext()
  const { i18n } = useTranslation()

  return (
    <>
      <div>
        <button onClick={() => changeTheme('Sophia')}>Sophia</button>
        <button onClick={() => changeTheme('Jade')}>Jade</button>
      </div>
      <div>
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('vi')}>Vietnamese</button>
      </div>
    </>
  )
}
export default Settings
