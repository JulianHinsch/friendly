## TODO:

UI

- Make a 'content box' global style
- Choose and implement global color scheme
- Make a .png favicon from the users icon
- Add field validation to everything, and make sure to be consistent server/client
- Prevent users from viewing content they are not authorized to view by reacting to the server's 403 response.
- Add a follows 'inbox'
- Add chat
- Put containers and components in the same files?
- Put styles in a different folder?

REDUX

- Normalize state - when a list of posts is loaded, set users, comments, and reactions - these are all loaded too
- Load data!
- Implement post flow
- Implement comment flow
- Implement reaction flow
- Implement follow flow
- Implement chat flow

SERVER

- Fix signup - right now it is not returning 'user already exists' error...
- Add object level permissions on api calls (for example, even if i'm authenticated, i cant delete somebody else's post)
- Validation
- Implement chat

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



