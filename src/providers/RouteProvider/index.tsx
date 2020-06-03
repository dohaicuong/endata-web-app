import React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'
import PrivateRoute from '../../components/route/PrivateRoute'

export type AppRouteProps = RouteProps & {
  private?: boolean
}
export type RouteProviderProps = {
  routes: AppRouteProps[]
}
const RouteProvider: React.FC<RouteProviderProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, index) => {
        // @ts-ignore
        if (route.private) return <PrivateRoute key={index} {...route} />
        return <Route key={index} {...route} />
      })}
    </Switch>
  )
}
export default RouteProvider
