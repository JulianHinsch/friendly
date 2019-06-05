/search/
/feed/:userid?limit=50&offset=0 - could be posts by a user and their friends
/profile/:userid?limit=50&offset=0 - could be posts just by a user

# Comments

POST /comments/

# Users

/signup/
/search/
/login/
/logout/
    
# Posts

GET /posts/:id

# Reactions

POST /reactions

# Follows

POST /follows

# Chat

# Auth


----

# Common API Calls

# Public (no auth required)

- Search users by name
- Login, sign up

# Below will require both authentication and authorization

- Fetch 100 most recent posts (including username, comments (with username), reactions (with username) based on follows of a certain user id (paginated)

- Fetch 100 most recent posts (including username, comments (with username), reactions (with username) based on user id that created them) (paginated)

- Fetch a post (including username, 100 most recent comments (with username) (paginated), reactions (with username)

- Fetch all online users that are connections
- Fetch all conversations by user id (paginated)
- Create a conversation
- Post a message
- Fetch all messages by chat id (paginated)

- Post a post
- Post a comment on an entity that you or your connection created
- Delete a comment that you created, on an entity that you or your connection created
- Post a reaction on an entity that you or your connection created

- Post a follow
- Update a follow so that it is approved
- Delete a follow

- Delete a post, comment, or like that you created
- Delete yourself (and logout)

