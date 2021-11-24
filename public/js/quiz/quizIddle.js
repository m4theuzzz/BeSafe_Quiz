
const quizIddleHolder = document.getElementById('quizIddle');

const startQuiz = (subject) => {
    init(subject);
};

const orderQuizzes = (filter) => { };

const renderQuizzesBySubject = () => {
    const subjects = JSON.parse(window.localStorage.getItem("SUBJECTS"));

    subjects.forEach(subject => {
        let iddleButton = document.createElement('button');

        iddleButton.innerHTML = subject;
        iddleButton.onclick = () => startQuiz(subject);

        quizIddleHolder.appendChild(iddleButton);
    });
};

renderQuizzesBySubject();
