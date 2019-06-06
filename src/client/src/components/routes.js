import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './auth/Login/LoginContainer';
import Signup from './auth/Signup/SignupContainer';
import Post from './feed/Post/PostContainer';
import SearchResults from './misc/SearchResults/SearchResultsContainer';
import Feed from './feed/Feed/FeedContainer';
import Profile from './profile/Profile/ProfileContainer';
import NotFound from './misc/NotFound/NotFound';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if(auth.isAuthenticated()) {
            return <Component {...props}/>
        } else {
            return <Redirect to={{pathname: "/login", state: { from: props.location }}}/>
        }}}/>
);

const Routes = () => {
    //using render functions here because of https://github.com/ReactTraining/react-router/issues/6471
    return (
        <Switch>
            <Route exact path='/' render={() => <Feed/>}/> 
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/signup' render={() => <Signup/>}/>
            <Route path='/search' render={() => <SearchResults/>}/>
            <Route path='/user' render={() => <Profile/>}/>
            <Route path='/post' render={() => <Post/>}/>

            {/* <ProtectedRoute auth={auth} path='/' component={PostList}/>
            <ProtectedRoute auth={auth} path='/profile' component={PostList}/>
            <ProtectedRoute auth={auth} path='/post' component={Post}/> */}
            <Route render={() => <NotFound/>}/>
            {/*<Route component={Forbidden}/> */}
        </Switch>
    )
}

export default Routes;