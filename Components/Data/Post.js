import { USERS } from "./Users";

export const POSTS=[
    {
    image:'https://img.freepik.com/premium-photo/hacking-is-serious-business-shot-focussed-computer-hacker-using-computer-dark_590464-14066.jpg?size=626&ext=jpg&ga=GA1.1.2086960331.1702853270&semt=ais',
    user:USERS[0].user,
    likes:7870,
    caption:'Train to hogwarts.',
    profile_picture:USERS[0].image,
    comments:[
        {
            user:'Joel',
            comment:'wow! THis build looks fie.Sper excited about it'
        },
        {
            user:'JoelVumbem',
            comment:'wow! THis build looks fie.Sper excited about it'
        },
        
    ],

    },
    {
        image:'https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg&ga=GA1.1.2086960331.1702853270&semt=sph',
        user:USERS[1].user,
        likes:1000,
        caption:'Hard work pays but requires much patience....',
        profile_picture:USERS[1].image,
        comments:[
            {
                user:'Rhema',
                comment:"I'M SLEEPING!!!",
            },
        ],
    },
    {
        image:'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?size=626&ext=jpg&ga=GA1.1.2086960331.1702853270&semt=ais',
        user:USERS[3].user,
        likes:1000,
        caption:'Consistency is key',
        profile_picture:USERS[3].image,
        comments:[
            {
                user:'RhemaDonwi',
                comment:"I'M SLEEPING!!!",
            },
        ],
    },

    {
        image:'https://img.freepik.com/free-photo/person-working-html-computer_23-2150040424.jpg?size=626&ext=jpg&ga=GA1.1.2086960331.1702853270&semt=ais',
        user:USERS[2].user,
        likes:1500,
        caption:'constant work ',
        profile_picture:USERS[2].image,
        comments:[
            {
                user:'JohnDoe',
                comment:"I'M SLEEPING!!!",
            },
        ],
    },
    {
        image:'https://img.freepik.com/free-photo/indian-man-programmers-testing-application-security-developed_231208-3632.jpg?size=626&ext=jpg&ga=GA1.1.2086960331.1702853270&semt=ais',
        user:USERS[1].user,
        likes:2000,
        caption:'Giving up is never an option',
        profile_picture:USERS[1].image,
        comments:[
            {
        user: 'JOhnMark',
        comment:"I'M SLEEPING!!!",
            },
        ],
    },

    

]

