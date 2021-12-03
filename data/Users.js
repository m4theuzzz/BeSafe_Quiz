const USERS = [
    {
        id: 1,
        accessLevel: 0,
        profileImage: "../img/user-placeholder.png",
        name: "Seu Nome",
        email: "",
        password: "", /*SHA256*/
        birthDate: "",
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