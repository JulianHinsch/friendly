module.exports = {
    users: [
        {
            email: 'jhinsch799@gmail.com',
            password: 'temp',
            name: 'Julian Hinsch',
        },
        {
            email: 'jane.doe@gmail.com',
            password: 'temp',
            name: 'Jane Doe',
        },
        {
            email: 'john.doe@gmail.com',
            password: 'temp',
            name: 'John Doe',
        },
    ],
    posts: [
        {
            userId: 1,
            text: "Hi, I'm Julian!",
        },
        {
            userId: 1,
            text: "This is my second post!",
        },
        {
            userId: 2,
            text: "Hi, I'm Jane!",
        },
        {
            userId: 2,
            text: "Check out this <a href='https://nytimes.com' target='_blank' rel='noopener noreferrer'>cool article</a>!",
        },
        {
            userId: 3,
            text: "Hi, I'm John!",
        },
    ],
    comments: [
        {
            postId: 1,
            userId: 2,
            text: "Hi Julian!",
        },
        {
            postId: 1,
            userId: 1,
            text: "Hey Jane!",
        },
        {
            postId: 2,
            userId: 1,
            text: "Killin it!",
        },
        {
            postId: 3,
            userId: 1,
            text: "Hey Jane!",
        },
        {
            postId: 3,
            userId: 3,
            text: "What's up Jane!",
        },
        {
            postId: 4,
            userId: 1,
            text: "This sucks!",
        },
        {
            postId: 5,
            userId: 2,
            text: "Hi John!",
        },
    ],
    reactions: [
        {
            userId: 2,
            postId: 1,
        },
        {
            userId: 3,
            postId: 1,
        },
        {
            userId: 1,
            postId: 3,
        },
        {
            userId: 1,
            postId: 4,
        },
        {
            userId: 3,
            postId: 2,
        },
        {
            userId: 3,
            postId: 3,
        },
        {
            userId: 3,
            postId: 4,
        },
    ],
    follows: [
        {
            userId: 1,
            followsId: 2,
            isApproved: true,
        },
        {
            userId: 1,
            followsId: 3,
            isApproved: true,
        },
        {
            userId: 2,
            followsId: 1,
            isApproved: true,
        },
        {
            userId: 3,
            followsId: 1,
            isApproved: false,
        },
        {
            userId: 3,
            followsId: 2,
            isApproved: true,
        },
    ]
}


