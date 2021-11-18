const app = document.getElementById('app');

let validationObject = {
    subject: false,
    challange: false,
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

const addNewQuestion = () => {
    const subjects = getTable("SUBJECTS");
    const questionObject = {
        type: "single",
        subject: document.getElementById("subject").value,
        challange: document.getElementById("challange").value,
        priority: document.getElementById("priority").value,
        question: document.getElementById("question").value,
        answers: [
            document.getElementById("answer_one").value,
            document.getElementById("answer_two").value,
            document.getElementById("answer_tree").value,
            document.getElementById("answer_four").value,
        ],
        correctAnswer: [document.getElementById("correctAnswer").value - 1],
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
        window.alert(errorText)
    }

    if (subjects.indexOf(questionObject.subject) == -1) {
        insertIntoTable("SUBJECTS", questionObject.subject);
    }

    insertIntoTable("QUESTIONS", questionObject);
    window.alert("Pergunta inserida com sucesso");
};

document.getElementById('addQuestion').addEventListener('submit', (event) => {
    event.preventDefault();
    addNewQuestion();
});

document.getElementById('addQuestion').children.forEach(element => {
    element.addEventListener('change', (event) => {
        validateField(event.target);
    });
});