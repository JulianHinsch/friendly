## TODO:

UI

- Set loading flags!!! Maybe use a new action type?

- It seems like a bad idea to mix loading & actual entities in the same action (i.e. SET_THINGS)
- Maybe the best solution is to just add a loading setter to each entity (i.e. SET_THINGS_LOADER)
- Then, we can just dispatch this array of actions using our action splitter middleware that sometimes doesn't work

- Load correct posts for each user!!
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

- Implement post flow
- Implement comment flow
- Implement reaction flow
- Implement follow flow
- Implement chat flow
- Put { id, userId } etc in container methods so that component knows what params to pass?
- Figure out how to populate all nested data from denormalizers

SERVER

- Fix signup - right now it is not returning 'user already exists' error...
- Add object level permissions on api calls (for example, even if i'm authenticated, i cant delete somebody else's post)
- Validation
- Chat

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



