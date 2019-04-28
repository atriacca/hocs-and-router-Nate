import React from 'react'
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom'
import Home from './components/Home.js'
import Profile from './components/Profile.js'

const App = (props) => {
    document.title = props.location.pathname[1].toUpperCase() + props.location.pathname.slice(2)

    return (
        <div>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/party">Party</Link>
            </div>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/profile" render={rProps => <Profile {...rProps}/>}/>
                {/* Catch-all route that redirects to the profile page */}
                <Route path="*" render={() => <Redirect to="/profile"/>}/>
            </Switch>
        </div>
    )  
}

export default withRouter(App)

// Higher Order Components(functions)
    // 1. Accepts a function as a  parameter
    // 2. It returns a new function

    // function app(){

    // }

    // app(props)
    // <App age={10}/>


     {/* <div>
                <h1>{props.count}</h1>
                <button onClick={props.increment}>Increment</button>
            </div> */}