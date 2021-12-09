const user = getById('USERS', window.localStorage.getItem('loggedUser')); //automatizar com sistema de login

const clearChildren = (element) => {
    if (element.children.length == 0) {
        return;
    }

    for (let i = element.children.length - 1; i >= 0; i--) {
        element.removeChildren(element.children[i]);
    }
};

const fetchUserLevels = (totalExperience) => {
    const userAnsweredQuestions = user.completedQuizzes.answeredQuestions;
    const subjects = getAnsweredQuestionsSubjects(userAnsweredQuestions);

    let levelsBySubject = subjects.reduce((questionsBySubject, subject) => {
        let questions = getAnsweredQuestionsBySubject(userAnsweredQuestions, subject);
        let experience = getTotalExperience(questions);
        questionsBySubject[subject] = {};
        questionsBySubject[subject]["exp"] = experience;
        questionsBySubject[subject]["level"] = getProtectionLevel(experience);
        return questionsBySubject;
    }, {});

    levelsBySubject["total"] = {};
    levelsBySubject["total"]["exp"] = totalExperience;
    levelsBySubject["total"]["level"] = getProtectionLevel(totalExperience);

    return levelsBySubject;
}

const updateLevelsProgress = (userLevels) => {
    for (const subject of Object.keys(userLevels)) {
        let element = document.getElementById(`${subject}Progress`);
        let progress = (userLevels[subject]["exp"] / (userLevels[subject]["level"] * 300)) * 100;
        element.style.width = `${progress}%`;
    }
};

const renderLevelMetrics = () => {
    const level = document.getElementById('level');
    const levelBySubject = document.getElementById('levelBySubject');

    const userLevels = fetchUserLevels(user.experience);

    level.innerHTML = `${userLevels["total"]["level"]}`;

    let levelBySubjectHtml = '';
    for (const subject in userLevels) {
        if (subject == "total") {
            continue;
        }

        levelBySubjectHtml += `
        <span class="subjectLevel">
            <div class="clearfix">
                <div class="float-start">${translate(subject)}</div>
                <small class="float-end">Nível ${userLevels[subject]["level"]}</small>
            </div>
            <div class="progress">
                <div class="progress-bar" id="${subject}Progress" role="progressbar" aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
        </span>
        `;
    }

    levelBySubject.innerHTML = levelBySubjectHtml;

    updateLevelsProgress(userLevels);
};

const renderProfileHeader = () => {
    const profileImage = document.getElementById('profileImage');
    const userName = document.getElementById('userName');

    profileImage.src = user.profileImage;
    userName.innerHTML = `${user.name}`;
};

const updateAnsweredProgress = (answeredBySubject) => {
    for (const subject of Object.keys(answeredBySubject)) {
        let element = document.getElementById(`${subject}AnsweredProgress`);
        let progress = (answeredBySubject[subject]["answered"].length / answeredBySubject[subject]["all"].length) * 100;
        element.style.width = `${progress}%`;
    }
};

const renderAnsweredQuestionsMetrics = () => {
    const answeredQuestions = document.getElementById('answeredQuestions');
    const answeredQuestionsProgress = document.getElementById('answeredQuestionsProgress');
    const answeredQuestionsBySubject = document.getElementById('answeredQuestionsBySubject');

    const allQuestions = JSON.parse(window.localStorage.getItem("QUESTIONS"));
    const userAnsweredQuestions = user.completedQuizzes.answeredQuestions;
    const subjects = getAnsweredQuestionsSubjects(userAnsweredQuestions);

    answeredQuestions.innerHTML = `${userAnsweredQuestions.length}/${allQuestions.length}`;
    answeredQuestionsProgress.style.width = `${(userAnsweredQuestions.length / allQuestions.length) * 100}%`;

    const questionsBySubject = subjects.reduce((answers, subject) => {
        answers[subject] = {};
        answers[subject]["answered"] = getAnsweredQuestionsBySubject(userAnsweredQuestions, subject);
        answers[subject]["all"] = getAnsweredQuestionsBySubject(allQuestions, subject);
        return answers;
    }, {});

    let answeredBySubjectHtml = '';
    for (const subject in questionsBySubject) {
        answeredBySubjectHtml += `
        <span class="subjectAnswer">
            <div class="clearfix">
                <div class="float-start">${translate(subject)}</div>
                <small class="float-end">${questionsBySubject[subject]["answered"].length}/${questionsBySubject[subject]["all"].length}</small>
            </div>
            <div class="progress">
                <div class="progress-bar" id="${subject}AnsweredProgress" role="progressbar" aria-valuemin="0"
                    aria-valuemax="100">
                </div>
            </div>
        </span>
        `;
    }
    answeredQuestionsBySubject.innerHTML = answeredBySubjectHtml;

    updateAnsweredProgress(questionsBySubject);
};

const renderHitRateMetrics = () => {
    const hitRate = document.getElementById('hitRate');
    const hitRateProgress = document.getElementById('hitRateProgress');
    const hitRateBySubject = document.getElementById('hitRateBySubject');

    const userAnsweredQuestions = user.completedQuizzes.answeredQuestions;
    const subjects = getAnsweredQuestionsSubjects(userAnsweredQuestions);

    hitRate.innerHTML = `${getHitRate(userAnsweredQuestions)}%`;
    hitRateProgress.style.width = `${getHitRate(userAnsweredQuestions)}%`;

    let hitRateBySubjectHtml = '';
    for (const subject of subjects) {
        let subjectHitRate = getHitRateBySubject(userAnsweredQuestions, subject);
        hitRateBySubjectHtml += `
        <span class="subjectAnswer">
            <div class="clearfix">
                <div class="float-start">${translate(subject)}</div>
                <small class="float-end">Taxa de Acerto: ${subjectHitRate}%</small>
            </div>
            <div class="progress">
                <div class="progress-bar" id="${subject}HitRateProgress" role="progressbar" aria-valuemin="0"
                    aria-valuemax="100" style="width: ${subjectHitRate}%;">
                </div>
            </div>
        </span>
        `;
    }

    hitRateBySubject.innerHTML = hitRateBySubjectHtml;
};

const renderUserMetrics = () => {
    renderProfileHeader();
    renderLevelMetrics();
    renderAnsweredQuestionsMetrics();
    renderHitRateMetrics();
};

renderUserMetrics();