let user = getById("USERS", 1); //TODO: Automatizar com sistema de login

const getLevelByExperience = () => { };

const getMisses = () => {
    if (user.completedQuizzes.answeredQuestions.length == 0) {
        return 0;
    }

    return user.completedQuizzes.answeredQuestions.reduce((acc, cur) => {
        acc += cur.misses;
        return acc;
    }, 0);
};

const saveChanges = () => {
    try {
        user.completedQuizzes.misses = getMisses();
        updateIntoTable("USERS", user);
        return true;
    } catch (error) {
        throw error;
    }
};

const incrementUserMisses = () => {
    try {
        user.completedQuizzes.misses += 1;
        saveChanges();
        return true;
    } catch (error) {
        throw error;
    }
};

const incrementUserExperience = (experience) => {
    try {
        user.experience += parseInt(experience);
        saveChanges();
        return true;
    } catch (error) {
        throw error;
    }
};

const addAnsweredQuestion = (question) => {
    try {
        let repeatedQuestionId = -1;

        for (const index in user.completedQuizzes.answeredQuestions) {
            const quest = user.completedQuizzes.answeredQuestions[index];
            if (quest.id == question.id) {
                repeatedQuestionId = index;
            }
        }

        if (repeatedQuestionId != -1) {
            user.completedQuizzes.answeredQuestions[repeatedQuestionId].hits =
                user.completedQuizzes.answeredQuestions[repeatedQuestionId].hits ?
                    user.completedQuizzes.answeredQuestions[repeatedQuestionId].hits + 1 : 1;
        } else {
            user.completedQuizzes.answeredQuestions.push(question);
        }

        incrementUserExperience(question.experience);
        saveTimePerQuestion();
        saveChanges();
        return true;
    } catch (error) {
        throw error;
    }
};