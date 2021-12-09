const USERS = [
    {
        id: 1,
        accessLevel: 1,
        profileImage: "../img/user-placeholder.png",
        name: "admin",
        email: "",
        password: "U2FsdGVkX18XWg72aBdVDHQHhLk5EjjumyD0CF44t9Y=", /*SHA256*/
        completedQuizzes: {
            answeredQuestions: [],
            misses: 0
        },
        experience: 0,
        configurations: {
            theme: "light",
            reminders: true,
            tips: false,
            mainFontSize: 16
        }
    }
];

const initUsers = () => {
    if (!hasTable("USERS")) {
        createTable("USERS");
        USERS.forEach(user => {
            insertIntoTable("USERS", user);
        });
    }
};

initUsers();