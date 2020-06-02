import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

export type AppRouteProps = RouteProps & {
  private?: boolean
}
export type RouteProviderProps = {
  routes: AppRouteProps[]
}
const RouteProvider: React.FC<RouteProviderProps> = ({ routes }) => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          if (route.private) return <PrivateRoute key={index} {...route} />
          return <Route key={index} {...route} />
        })}
      </Switch>
    </Router>
  )
}
export default RouteProvider
