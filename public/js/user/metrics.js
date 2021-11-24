const filterMetricsByDate = (questions, date) => {
    return questions.filter(quest => {
        if (quest.timeElapsed.startTime >= date.startDate &&
            quest.timeElapsed.startTime <= date.endDate) {
            return quest;
        }
    });
};

const getAnsweredQuestionsSubjects = (questions) => {
    return questions.reduce((subjects, quest) => {
        if (subjects.indexOf(quest.subject) > -1) {
            return subjects;
        }

        subjects.push(quest.subject);
        return subjects;
    }, []);
};

const getAnsweredQuestionsBySubject = (questions, subject) => {
    return questions.filter(quest => {
        if (quest.subject == subject) {
            return quest;
        }
    });
};

const getTimeElapsedBySubject = (questions, subject) => {
    return getAnsweredQuestionsBySubject(questions, subject).reduce((timeElapsed, quest) => {
        timeElapsed += quest.timeElapsed.totalInSec;
        return timeElapsed;
    }, 0);
};

const getTotalMisses = (questions) => {
    return questions.reduce((misses, quest) => {
        misses += quest.misses;
        return misses;
    }, 0);
};

const getHitRate = (questions) => {
    const totalMisses = getTotalMisses(questions);
    const totalAnswered = questions.length + totalMisses;
    const hitRate = parseFloat((questions.length / totalAnswered) * 100).toFixed(2);
    return hitRate == "NaN" ? 0.00 : hitRate;
};

const getHitRateBySubject = (questions, subject) => {
    return getHitRate(getAnsweredQuestionsBySubject(questions, subject));
};

const getTotalExperience = (questions) => {
    return questions.reduce((exp, quest) => {
        exp += (quest.experience * quest.hits);
        return exp;
    }, 0);
};

const getProtectionLevel = (experience) => {
    if (experience < 300) {
        return 1;
    }

    if (experience >= 300 && experience < 600) {
        return 2;
    }

    if (experience >= 600 && experience < 900) {
        return 3;
    }

    if (experience >= 900 && experience < 1200) {
        return 4;
    }

    if (experience >= 1200 && experience < 1500) {
        return 5;
    }

    if (experience >= 1500 && experience < 1800) {
        return 6;
    }

    if (experience >= 1800 && experience < 2100) {
        return 7;
    }

    if (experience >= 2100 && experience < 2400) {
        return 8;
    }

    if (experience >= 2400 && experience < 2700) {
        return 9;
    }

    if (experience >= 2700 && experience < 3000) {
        return 10;
    }

    return 11;
};

const getProtectionLevelBySubject = (questions, subject) => {
    return getProtectionLevel(getAnsweredQuestionsBySubject(questions, subject));
};