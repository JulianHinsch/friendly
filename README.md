## TODO:

UI

- make a 'content box' global style
- choose and implement global color scheme
- make a .png favicon from the users icon
- add field validation to everything, and make sure to be consistent server/client

REDUX

- fix login, signup - store decoded token in state or just use document.cookie?
- differentiate between logout, login, and signup in auth reducer - right now they are all auth_success
- load posts
- implement create post flow
- fix the unorthodox way I'm dispatching actions from UI (via wrappers i.e. in auth.js)

SERVER

- object level permissions on database operations (for example, if i'm authenticated, i can delete somebody else's post)
- validation

VALIDATION RULES


NAMES

- no numbers
- no special characters except hyphens

PASSWORD

- number
- special character
- 8+ chars
- uppercase and lowercase letters

EMAIL

- x@x.co

POSTS/COMMENTS

- 560 characters max



