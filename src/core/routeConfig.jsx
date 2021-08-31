import React from 'react'
import { Switch, Route } from 'react-router-dom'

import NewOrder from '../screens/NewOrder/NewOrder'
import Main from '../screens/Main/Main'
import NotFound from '../ui/components/NotFound/NotFound'
import routeNames from './routeNames'
import Profile from '../screens/Profile/Profile'

const Router = () => (
  <Switch>
    <Route exact path={routeNames.main} component={Main} />
    <Route exact path={routeNames.newOrd} component={NewOrder} />
    <Route exact path={routeNames.profile} component={Profile} />
    <Route path={routeNames.notFound} component={NotFound} />
  </Switch>
)

export default Router
