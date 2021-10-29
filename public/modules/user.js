const user = USERS[0]; //TODO: Automatizar com sistema de login

const getLevelByExperience = () => { };

const getMisses = () => {
    if (user.completedQuizzes.questionsAnswered.length == 0) {
        return 0;
    }

    return user.completedQuizzes.questionsAnswered.reduce((acc, cur) => {
        acc += cur.misses;
        return acc;
    }, 0);
};

const saveChanges = () => {
    try {
        user.completedQuizzes.misses = getMisses();
        USERS[0] = user;
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
        user.experience += experience;
        saveChanges();
        return true;
    } catch (error) {
        throw error;
    }
};

const addAnsweredQuestion = (question) => {
    try {
        user.completedQuizzes.questionsAnswered.push(question);
        incrementUserExperience(question.experience);
        saveChanges();
        return true;
    } catch (error) {
        throw error;
    }
};