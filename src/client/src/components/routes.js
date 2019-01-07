import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SinglePost from './pages/SinglePost/SinglePost';
import Landing from './pages/Landing/Landing';
import Newsfeed from './pages/Newsfeed/Newsfeed';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import SearchResults from './pages/SearchResults/SearchResults';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const Routes = () => {
    <Switch>
        <Route path='/' component={Landing}/>
        <Route path='/' component={Newsfeed}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/search' component={SearchResults}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route component={NotFound}/>
    </Switch>
}

Routes.propTypes = {

}

export default Routes;