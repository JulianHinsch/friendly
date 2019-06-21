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
import NotFound from '../NotFound/NotFound';

const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if(auth.isAuthenticated) {
            return <Component {...props}/>
        } else {
            console.log(props.location);
            return <Redirect to={{ pathname: "/login", state: { from: props.location }}}/>
        }}}/>
);

const Routes = (props) => {
    const { auth } = props;
    /* using render props for stateful components
        because of https://github.com/ReactTraining/react-router/issues/6471 */
    return (
        <Switch>
            <Route exact path='/' render={() => auth.isAuthenticated ? <Feed/> : <Landing/>}/>
            <Route path='/login' render={(props) => <Login location={props.location}/>}/>
            <Route path='/signup' render={() => <Signup/>}/>
            <Route path='/search' render={() => <SearchResults key={props.location.key}/>}/>
            <ProtectedRoute auth={auth} path='/profile' component={Profile}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

Routes.propTypes = {
    auth: PropTypes.object.isRequired,
}

export default withRouter(connect((state, ownProps) => ({ auth: state.auth}), null)(Routes));
