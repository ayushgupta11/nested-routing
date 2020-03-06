import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import routeConstants from '../../constants/routeConstants'
import HomeComponent from '../HomeComponent'
import LandingComponent from '../LandingComponent'
import ProfileComponent from '../ProfileComponent'

export default function RootComponent({ match }) {
    const [ data, setData ] = useState({})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>{ 
            setData(json)
            console.log(json)
        })
        return
    }, [])
    return (
        <div>
            <h1>Header</h1>
            <p>Root Page</p>
            <Switch>
                <Route exact path={`${match.path}${routeConstants.home}`} component={HomeComponent} />
                <Route exact path={`${match.path}${routeConstants.landing}`} component={LandingComponent} />
                <Route exact path={`${match.path}${routeConstants.profile}`} component={ProfileComponent} />
            </Switch>
        </div>
    )
}
