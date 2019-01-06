## User

- ID
- Name
- Email
- Image?
- Encrypted Password

## Users - Users (follows) (many-to-many join table)

- Follower ID
- Following ID

# Posts

- ID
- UserID
- Text
- Timestamps

# Comments

- UserID
- PostID
- Text
- Timestamps

# Likes

- UserID
- PostID

