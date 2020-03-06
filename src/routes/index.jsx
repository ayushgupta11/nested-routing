import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routeConstants from '../constants/routeConstants'
import RootComponent from '../components/RootComponent'
import LoginComponent from '../components/LoginComponent'

export default function Routes() {
    return (
       <Switch>
           <Route path={routeConstants.root} component={RootComponent} />
           <Route path={routeConstants.login} component={LoginComponent} />
       </Switch>
    )
}