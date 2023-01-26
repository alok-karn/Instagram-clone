import { USERS } from "./users";

export const POSTS = [
    {
        id: 0,
        imageURL:
            "https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525__480.jpg",
        user: USERS[0].user,
        likes: " 7,800",
        caption: "This is a caption 😉😉",
        profile_picture:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments: [
            {
                user: "tony stark",
                comment: "I am Iron Man.",
            },
            {
                user: "steve rogers",
                comment: "I have a shield.",
            },
        ],
    },
    {
        id: 1,
        imageURL:
            "https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147__480.jpg",
        user: USERS[1].user,
        likes: "900",
        caption: "This is a caption 😉😍",
        profile_picture:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments: [
            {
                user: "bruce banner",
                comment: "I am a scientist and a Hulk.",
            },
            {
                user: "thor",
                comment: "I am a God of Thunder.",
            },
        ],
    },
    {
        id: 2,
        imageURL:
            "https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg",
        user: USERS[2].user,
        likes: "1,000",
        caption: "This is a caption 😍😍",
        profile_picture:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        comments: [
            {
                user: "peter parker",
                comment: "I am Spider Man",
            },
            {
                user: "natasha romanoff",
                comment: "I am Black Widow",
            },
        ],
    },
    {
        id: 3,
        imageURL:
            "https://cdn.pixabay.com/photo/2019/01/05/17/05/man-3915438__480.jpg",
        user: USERS[3].user,
        likes: "600",
        caption: "This is a caption 💗💗",
        profile_picture:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        comments: [
            {
                user: "peter parker",
                comment: "I am Spider Man",
            },
            {
                user: "natasha romanoff",
                comment: "I am Black Widow",
            },
            {
                user: "bruce banner",
                comment: "I am a scientist and a Hulk.",
            },
            {
                user: "thor",
                comment: "I am a God of Thunder.",
            },
        ],
    },
    {
        id: 4,
        imageURL:
            "https://cdn.pixabay.com/photo/2018/12/04/22/38/road-3856796__480.jpg",
        user: USERS[4].user,
        likes: "1,200",
        caption: "This is a caption 😍😍💗💗",
        profile_picture:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        comments: [
            {
                user: "peter parker",
                comment: "I am Spider Man",
            },
            {
                user: "natasha romanoff",
                comment: "I am Black Widow",
            },
            {
                user: "tony stark",
                comment: "I am Iron Man.",
            },
            {
                user: "steve rogers",
                comment: "I have a shield.",
            },
        ],
    },
];
