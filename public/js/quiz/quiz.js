const quizHolder = document.getElementById('quiz');
const quizSize = 10;
const ALL_QUESTIONS = JSON.parse(window.localStorage.getItem("QUESTIONS")) ?? [];

let quizAnsweredQuestions = [];

const renderMetrics = () => {
    const totals = document.createElement('h3');
    const totalHits = document.createElement('p');
    const totalMisses = document.createElement('p');
    const hitRate = document.createElement('p');
    const experienceEarned = document.createElement('p');
    const questHolder = document.createElement('div');
    const lineBreak = document.createElement('br');

    let user = getById("USERS", 1);
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
        const title = document.createElement('h3');
        const subject = document.createElement('p');
        const challenge = document.createElement('p');
        const time = document.createElement('p');
        const misses = document.createElement('p');

        title.innerText = `Pergunta ${index + 1}`;
        subject.innerText = `Assunto: ${quest.subject}`;
        challenge.innerText = `Dificuldade: ${quest.challenge}`;
        time.innerText = `Tempo Gasto: ${quest.timeElapsed.totalInSec} segundos`;
        misses.innerText = `Quantidade de Erros: ${quest.misses}`;

        missesTot += quest.misses;
        experienceTot += quest.experience;

        questHolder.appendChild(title);
        questHolder.appendChild(subject);
        questHolder.appendChild(challenge);
        questHolder.appendChild(time);
        questHolder.appendChild(misses);
        questHolder.appendChild(lineBreak);
    });

    let answeredTot = hitsTot + missesTot;
    let hitRateValue = hitsTot / answeredTot;

    totals.innerText = "Métricas globais do Quiz";
    totalHits.innerText = `Acertos: ${hitsTot}`;
    totalMisses.innerText = `Erros: ${missesTot}`;
    hitRate.innerText = `Taxa de Acertos: ${hitRateValue * 100}%`;
    experienceEarned.innerText = `Experiência Obtida: ${experienceTot}`;

    quizHolder.appendChild(totals);
    quizHolder.appendChild(totalHits);
    quizHolder.appendChild(totalMisses);
    quizHolder.appendChild(hitRate);
    quizHolder.appendChild(experienceEarned);
    quizHolder.appendChild(lineBreak);
    quizHolder.appendChild(questHolder);

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

    const quizQuestion = document.createElement('div');
    const question = document.createElement('h3');
    const answers = document.createElement('div');
    const lineBreak = document.createElement('br');

    if (!questions[i]) {
        return finish();
    }

    question.innerText = questions[i].question;

    for (let j = 0; j < questions[i].answers.length; j++) {
        const answer = document.createElement('button');
        answer.innerText = questions[i].answers[j];
        answer.onclick = () => checkResult(questions, i, j);
        answers.appendChild(answer);
        answers.appendChild(lineBreak);
    }

    quizQuestion.appendChild(question);
    quizQuestion.appendChild(answers);

    quizHolder.appendChild(quizQuestion);
    startTimeCount(questions[i].id);
}

const init = (subject = null, challenge = null) => {
    subject = subject == "all" ? null : subject;
    const questions = fetchQuestions(subject, challenge);
    renderQuestions(questions);
};

init();