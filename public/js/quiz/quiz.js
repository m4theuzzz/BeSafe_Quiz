const quizHolder = document.getElementById('quiz');
const quizSize = 6;
const ALL_QUESTIONS = JSON.parse(window.localStorage.getItem("QUESTIONS")) ?? [];

let quizAnsweredQuestions = [];

const renderMetrics = () => {
    const metrics = document.createElement('div');
    const title = document.createElement('h3');
    const holder = document.createElement('div');
    const hitRate = document.createElement('p');
    const experienceEarned = document.createElement('p');
    const backLink = document.createElement('a');

    let user = getById("USERS", window.localStorage.getItem('loggedUser'));
    let answeredQuestionsMetrics = [];

    for (const id of quizAnsweredQuestions) {
        const answered = user.completedQuizzes.answeredQuestions;

        for (const quest of answered) {
            if (quest.id == id) {
                answeredQuestionsMetrics.push(quest);
            }
        }
    }

    let hitsTot = quizAnsweredQuestions.length;
    let missesTot = 0;
    let experienceTot = 0;

    answeredQuestionsMetrics.forEach((quest, index) => {
        missesTot += quest.misses;
        experienceTot += quest.experience;
    });

    let answeredTot = hitsTot + missesTot;
    let hitRateValue = hitsTot / answeredTot;

    metrics.className = "metrics";
    holder.className = "feedback";
    backLink.className = "finishLink";

    title.innerText = "Você terminou o questionário!";
    experienceEarned.innerText = `Experiência Obtida: ${experienceTot}`;
    hitRate.innerText = `Pontuação: ${(hitRateValue * 100).toFixed()}%`;
    backLink.innerHTML = `<span>Continuar</span>`;

    backLink.href = './home.html';

    holder.appendChild(experienceEarned);
    holder.appendChild(hitRate);

    metrics.appendChild(title);
    metrics.appendChild(holder);
    metrics.appendChild(backLink);

    quizHolder.appendChild(metrics);

    quizAnsweredQuestions = [];
};

const finish = () => {
    window.alert("Você encerrou o quiz");
    renderMetrics();
};

const filterBySubject = (questions, subject) => {
    return questions.filter((quest) => {
        if (quest.subject == subject) {
            return quest;
        }
    });
};

const filterByChallenge = (questions, challenge) => {
    return questions.filter((quest) => {
        if (quest.challenge == challenge) {
            return quest;
        }
    });
};

const fetchIsCompletedInfo = (questions) => {
    const alreadyAnswered = user.completedQuizzes.answeredQuestions;
    let answeredQuestionsIds = [];

    for (let i = 0; i < alreadyAnswered.length; i++) {
        answeredQuestionsIds.push(alreadyAnswered[i].id);
    }

    for (let i = 0; i < questions.length; i++) {
        if (answeredQuestionsIds.indexOf(questions[i].id) > -1) {
            questions[i]["completed"] = true;
            continue;
        }

        questions[i]["completed"] = false;
    }

    return questions;
};

const filterAlreadyDoneQuestions = (questions) => {
    const questionsWithCompleteInformation = fetchIsCompletedInfo(questions);
    return questionsWithCompleteInformation.reduce((acc, cur) => {
        cur.completed ? acc.alreadyDone.push(cur) : acc.neverDone.push(cur);
        return acc;
    }, { alreadyDone: [], neverDone: [] });
};

const orderByPriority = (questions) => {
    return questions.sort(function (a, b) {
        if (a.priority > b.priority) {
            return -1;
        }
        if (a.priority < b.priority) {
            return 1;
        }

        return 0;
    });
};

const fillQuestionsArray = (preSelected, questions) => {
    for (let i = 0; i < questions.length; i++) {
        if (preSelected.length >= quizSize) {
            break;
        }
        preSelected.push(questions[i]);
    }

    return preSelected;
};

const fetchQuestions = (subject, challenge) => {
    const quests = subject ? filterBySubject(ALL_QUESTIONS, subject) : ALL_QUESTIONS;
    const leveledQuests = challenge != null ? filterByChallenge(quests, challenge) : quests;
    const { neverDone, alreadyDone } = filterAlreadyDoneQuestions(leveledQuests);
    const firstChoices = orderByPriority(neverDone);
    const seccondChoices = orderByPriority(alreadyDone);

    let questions = fillQuestionsArray([], firstChoices);
    questions = fillQuestionsArray(questions, seccondChoices);
    return questions;
};

const checkResult = (questions, index, answer) => {
    endTimeCount(questions[index].id);

    if (questions[index].correctAnswersIndex.indexOf(answer) > -1) {
        const answeredQuestion = {
            id: questions[index].id,
            subject: questions[index].subject,
            challenge: questions[index].challenge,
            misses: questions[index].misses ?? 0,
            hits: questions[index].hits ? questions[index].hits + 1 : 1,
            experience: questions[index].experience
        };
        quizAnsweredQuestions.push(answeredQuestion.id);
        addAnsweredQuestion(answeredQuestion);
        if (window.confirm(questions[index].success) || true) {
            renderQuestions(questions, index + 1);
        }
        return;
    }

    if (window.confirm(questions[index].failure) || true) {
        questions[index].misses ? questions[index].misses += 1 : questions[index].misses = 1;
        questions.push(questions[index]);
        renderQuestions(questions, index + 1);
    }
};

const clearQuizHolder = () => {
    if (quizHolder.children.length == 0) {
        return;
    }

    for (let i = quizHolder.children.length - 1; i >= 0; i--) {
        quizHolder.removeChild(quizHolder.children[i]);
    }
};

const renderQuestions = (questions, i = 0) => {
    clearQuizHolder();

    const quizzAnswers = document.createElement('div');
    const question = document.createElement('h3');
    const answers = document.createElement('div');
    const quizzHeader = document.createElement('div');
    const backLink = document.createElement('a');
    const questCounter = document.createElement('span');

    const headerSeparator = document.createElement('div');

    if (!questions[i]) {
        return finish();
    }

    quizzHeader.className = "quizzHeader";
    headerSeparator.className = "separator";
    answers.className = "answersHolder";

    question.innerHTML = questions[i].question;
    backLink.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
        </svg>
    `;
    backLink.href = './home.html';
    questCounter.innerHTML = `${i + 1}/${questions.length}`;

    for (let j = 0; j < questions[i].answers.length; j++) {
        const answer = document.createElement('button');
        answer.className = 'answer';
        answer.innerText = questions[i].answers[j];
        answer.onclick = () => checkResult(questions, i, j);
        answers.appendChild(answer);
    }

    headerSeparator.appendChild(backLink);
    headerSeparator.appendChild(questCounter);

    quizzHeader.appendChild(headerSeparator);
    quizzHeader.appendChild(question);

    quizzAnswers.appendChild(answers);

    quizHolder.appendChild(quizzHeader);
    quizHolder.appendChild(quizzAnswers);
    startTimeCount(questions[i].id);
}

const init = (subject = null, challenge = null) => {
    subject = subject == "all" ? null : subject;
    const questions = fetchQuestions(subject, challenge);
    renderQuestions(questions);
};

init();