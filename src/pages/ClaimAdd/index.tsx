import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import ChooseCompany from './ChooseCompany'
import AddClaim from './AddClaim'

const ClaimAdd = () => {
  const { url } = useRouteMatch()

  return (
    <Switch>
      <Route exact path={`${url}`} component={ChooseCompany} />
      <Route exact path={`${url}/:companyId`} component={AddClaim} />
    </Switch>
  )
}
export default ClaimAdd
