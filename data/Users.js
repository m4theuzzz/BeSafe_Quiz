const USERS = [
    {
        id: 1,
        type: "",
        name: "",
        email: "",
        password: "", /*SHA256*/
        birthDate: "",
        completedQuizzes: {
            questionsAnswered: [],
            misses: 0
        },
        experience: 0,
        configurations: {
            sound: true,
            theme: "light",
            reminders: true,
            tips: false,
            mainFontSize: 16
        }
    }
];

const initUsers = () => { };