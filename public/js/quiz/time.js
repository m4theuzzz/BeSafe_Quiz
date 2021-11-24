const getTimePerQuestion = () => {
    const answeredQuestions = user.completedQuizzes.answeredQuestions;
    let timeObject = answeredQuestions.reduce((acc, cur) => {
        acc[cur.id] = cur.timeElapsed;
        return acc;
    }, {});

    return timeObject;
};

let timePerQuestion = getTimePerQuestion();

const startTimeCount = (id) => {
    return timePerQuestion[id] = {
        startTime: new Date().getTime(),
        endTime: null
    };
}

const endTimeCount = (id) => {
    timePerQuestion[id].endTime = new Date().getTime();
    timePerQuestion[id].totalInSec = (timePerQuestion[id].endTime - timePerQuestion[id].startTime) / 1000;
};

const saveTimePerQuestion = () => {
    return user.completedQuizzes.answeredQuestions.filter((quest) => {
        if (!timePerQuestion[quest.id]) {
            return quest;
        }

        quest.timeElapsed = timePerQuestion[quest.id];

        return quest;
    });
};