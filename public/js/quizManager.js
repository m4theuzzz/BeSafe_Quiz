const app = document.getElementById('app');
const questsHolder = document.getElementById('questHolder');

let isNewQuest = true;
let editId = null;

let validationObject = {
    subject: false,
    challenge: false,
    priority: false,
    question: false,
    answer_one: false,
    answer_two: false,
    answer_tree: false,
    answer_four: false,
    correctAnswer: false,
    success: false,
    failure: false,
    experience: false,
};

const clearQuestCardsHolder = () => {
    if (questsHolder.children.length == 0) {
        return;
    }

    for (let i = questsHolder.children.length - 1; i >= 0; i--) {
        questsHolder.removeChild(questsHolder.children[i]);
    }
};

const renderQuestCards = () => {
    clearQuestCardsHolder();

    const questions = getTable("QUESTIONS");

    for (const quest of questions) {
        let questionHolder = document.createElement('div'),
            info = document.createElement('div'),
            subject = document.createElement('span'),
            challenge = document.createElement('span'),
            priority = document.createElement('span'),
            question = document.createElement('span'),
            answers = document.createElement('div'),
            answer_one = document.createElement('span'),
            answer_two = document.createElement('span'),
            answer_tree = document.createElement('span'),
            answer_four = document.createElement('span'),
            deleteButtom = document.createElement('button'),
            editButtom = document.createElement('button');

        questionHolder.className = "card";
        answers.className = "cardAnswers";
        question.className = "title";
        info.className = "info";
        deleteButtom.className = "deleter";
        editButtom.className = "edit";

        question.innerHTML = `${quest.question}<br/>`;
        subject.innerHTML = `Assunto: ${quest.subject}`;
        challenge.innerHTML = `Dificuldade: ${quest.challenge}`;
        priority.innerHTML = `Prioridade: ${quest.priority}`;
        answer_one.innerHTML = `${quest.answers[0]}<br/>`;
        answer_one.style.backgroundColor = quest.correctAnswersIndex[0] == 0 ? "rgba(0, 124, 21, .1)" : "rgba(131, 0, 0, .1)";
        answer_two.innerHTML = `${quest.answers[1]}<br/>`;
        answer_two.style.backgroundColor = quest.correctAnswersIndex[0] == 1 ? "rgba(0, 124, 21, .1)" : "rgba(131, 0, 0, .1)";
        answer_tree.innerHTML = `${quest.answers[2]}<br/>`;
        answer_tree.style.backgroundColor = quest.correctAnswersIndex[0] == 2 ? "rgba(0, 124, 21, .1)" : "rgba(131, 0, 0, .1)";
        answer_four.innerHTML = `${quest.answers[3]}<br/>`;
        answer_four.style.backgroundColor = quest.correctAnswersIndex[0] == 3 ? "rgba(0, 124, 21, .1)" : "rgba(131, 0, 0, .1)";
        deleteButtom.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
            <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"/>
        </svg>
        `;
        editButtom.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        `;

        deleteButtom.onclick = () => {
            deleteFromTable("QUESTIONS", quest);
            renderQuestCards();
        };

        editButtom.onclick = () => {
            document.getElementById('subject').value = quest.subject;
            document.getElementById('challenge').value = quest.challenge;
            document.getElementById('priority').value = quest.priority;
            document.getElementById('question').value = quest.question;
            document.getElementById('answer_one').value = quest.answers[0];
            document.getElementById('answer_two').value = quest.answers[1];
            document.getElementById('answer_tree').value = quest.answers[2];
            document.getElementById('answer_four').value = quest.answers[3];
            document.getElementById('correctAnswer').value = quest.correctAnswersIndex[0];
            document.getElementById('success').value = quest.success;
            document.getElementById('failure').value = quest.failure;
            document.getElementById('experience').value = quest.experience;
            document.getElementById('submitButton').value = "Salvar";
            isNewQuest = false;
            editId = quest.id;
            for (const element of document.getElementById('addQuestion').children) {
                element.children[0].dispatchEvent(new Event('input'));
            }
        };

        info.appendChild(subject);
        info.appendChild(challenge);
        info.appendChild(priority);

        answers.appendChild(answer_one);
        answers.appendChild(answer_two);
        answers.appendChild(answer_tree);
        answers.appendChild(answer_four);

        questionHolder.appendChild(question);
        questionHolder.appendChild(info);
        questionHolder.appendChild(answers);
        questionHolder.appendChild(deleteButtom);
        questionHolder.appendChild(editButtom);

        questsHolder.appendChild(questionHolder);
    }
};

const clearInputs = () => {
    for (const element of document.getElementById('addQuestion').children) {
        element.children[0].value = "";
        element.children[0].style.border = 0;
    }
    document.getElementById('submitButton').value = "Adicionar";
};

const addNewQuestion = () => {
    const subjects = getTable("SUBJECTS");
    let questionObject = {
        type: "single",
        subject: document.getElementById("subject").value,
        challenge: document.getElementById("challenge").value,
        priority: document.getElementById("priority").value,
        question: document.getElementById("question").value,
        answers: [
            document.getElementById("answer_one").value,
            document.getElementById("answer_two").value,
            document.getElementById("answer_tree").value,
            document.getElementById("answer_four").value,
        ],
        correctAnswersIndex: [document.getElementById("correctAnswer").value - 1],
        success: document.getElementById("success").value,
        failure: document.getElementById("failure").value,
        experience: document.getElementById("experience").value,
    };

    let canInsert = true;
    let errorText = "Os campos: ";
    Object.keys(validationObject).forEach(key => {
        if (!validationObject[key]) {
            canInsert = false;
            errorText += `${key}, `
        }
    });
    errorText += "não foram preenchidos corretamente."

    if (!canInsert) {
        window.alert(errorText);
        return;
    }

    if (subjects.indexOf(questionObject.subject) == -1) {
        insertIntoTable("SUBJECTS", questionObject.subject);
    }

    if (isNewQuest) {
        insertIntoTable("QUESTIONS", questionObject);
    } else {
        questionObject["id"] = editId;
        updateIntoTable("QUESTIONS", questionObject);
        isNewQuest = true;
        editId = null;
    }
    renderQuestCards();
    clearInputs();
};

document.getElementById('addQuestion').addEventListener('submit', (event) => {
    event.preventDefault();
    addNewQuestion();
});

const validateField = (field) => {
    if (field.id == "subject" ||
        field.id == "question" ||
        field.id == "answer_one" ||
        field.id == "answer_two" ||
        field.id == "answer_tree" ||
        field.id == "answer_four" ||
        field.id == "success" ||
        field.id == "failure") {
        validationObject[field.id] = field.value != "";
        field.style.border = validationObject[field.id] ? "2px solid green" : "2px solid red";
        return;
    }

    if (field.id == "challenge" ||
        field.id == "priority" ||
        field.id == "experience") {
        if (field.value < 0) {
            field.value = 0
        }

        validationObject[field.id] = field.value != "";
        field.style.border = validationObject[field.id] ? "2px solid green" : "2px solid red";
    }

    if (field.id == "correctAnswer") {
        if (field.value > 4) {
            field.value = 4
        }

        if (field.value < 1) {
            field.value = 1
        }
        validationObject[field.id] = (field.value >= 1 && field.value <= 4);
        field.style.border = validationObject[field.id] ? "2px solid green" : "2px solid red";
        return;
    }
};

for (const element of document.getElementById('addQuestion').children) {
    element.children[0].addEventListener('input', (event) => {
        validateField(event.target);
    });
}

renderQuestCards();