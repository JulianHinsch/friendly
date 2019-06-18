import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Landing from '../Landing/Landing';
import Feed from '../Feed/FeedContainer';
import Login from '../Login/LoginContainer';
import Signup from '../Signup/SignupContainer';
import SearchResults from '../SearchResults/SearchResultsContainer';
import Profile from '../Profile/ProfileContainer';
import Post from '../Post/PostContainer';
import NotFound from '../NotFound/NotFound';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if(auth.isAuthenticated) {
            return <Component {...props}/>
        } else {
            return <Redirect to={{pathname: "/login", state: { from: props.location }}}/>
        }}}/>
);

const Routes = (props) => {
    const { auth } = props;
    //using render functions here because of https://github.com/ReactTraining/react-router/issues/6471
    return (
        <Switch>
            <Route exact path='/' render={() => auth.isAuthenticated ? <Feed/> : <Landing/>}/> 
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/signup' render={() => <Signup/>}/>
            <Route path='/search' render={() => <SearchResults/>}/>
            <ProtectedRoute auth={auth} path='/profile' component={Profile}/>
            <ProtectedRoute auth={auth} path='/post' component={Post}/>}/>
            <Route render={() => <NotFound/>}/>
        </Switch>
    )
}

Routes.propTypes = {
    auth: PropTypes.object.isRequired,
}

export default withRouter(connect((state, ownProps) => ({ auth: state.auth}), null)(Routes));
