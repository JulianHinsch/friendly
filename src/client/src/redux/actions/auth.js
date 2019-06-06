import { apiRequest } from '../actions/api';

export const AUTH = '[Auth]';

/*

These aren't really middleware or action creators - they are just wrapping the apiRequest action
which returns a function because its a 'thunk'

One could also move this logic to the UI containers - where they 
would just call the apiRequest action creator i.e.

logIn: (credentials) => dispatch(apiRequest({
    data: credentials,
    method: 'POST',
    url: '/login',
    feature: '[Auth]',
})),

But, then they can't be shared between components, and we have to actually type out the feature :)

*/

export const logIn = (credentials) => apiRequest({
    data: credentials,
    method: 'POST',
    url: '/login',
    feature: AUTH,
});

export const signUp = (user) => apiRequest({
    data: user,
    method: 'POST',
    url: '/signup',
    feature: AUTH,
});

export const logOut = () => apiRequest({
    method: 'POST',
    url: '/logout',
    feature: AUTH,
});

export const getUserInfo = () => ({

});




