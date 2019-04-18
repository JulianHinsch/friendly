import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Login from './auth/Login/Login';
import Signup from './auth/Signup/Signup';
import Post from './feed/Post/Post';
import SearchResults from './misc/SearchResults/SearchResults';
import Feed from './feed/Feed/Feed';
import Profile from './profile/Profile/Profile';

//routes

// / PostList or -> Login
// /user?id=54265265 PostList
// /post?id=5254325  Post
// /search?1=fdagfagg SearchResults
// /signup Signup
// /login Login

/**
 * Redirect if the user is not logged in.
 * This route is for authenticated users only.
 * Note: Any use of auth.isAuthenticated is insecure as this can be manipulated by changing the 
 * expires_at field of localStorage.
 * However, api calls will be impossible without a valid access_token.
 * Thus all secure data must not be stored in the client, as usual, and must instead be stored on the server.
 */
const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if(auth.isAuthenticated()) {
            return <Component {...props}/>
        } else {
            return <Redirect to={{pathname: "/login", state: { from: props.location }}}/>
        }}}/>
);

const Routes = () => {    

    return (
        <Switch>
            <Route exact path='/' component={Feed}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/search' component={SearchResults}/>
            <Route path='/user' component={Profile}/>
            <Route path='/post' component={Post}/>

            {/* <ProtectedRoute auth={auth} path='/' component={PostList}/>
            <ProtectedRoute auth={auth} path='/profile' component={PostList}/>
            <ProtectedRoute auth={auth} path='/post' component={Post}/> */}
            {/* <Route component={NotFound}/>
            <Route component={Forbidden}/> */}
        </Switch>
    )
}

export default Routes;