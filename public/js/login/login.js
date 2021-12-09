const login = document.getElementById('login');
const signin = document.getElementById('signin');
const alternator = document.getElementById('alternate');

let alternate = true;
let signInValidation = {};

const goToHome = () => {
    let a = document.createElement('a');
    a.href = './public/html/home.html';
    a.click();
}

const doLogIn = (nick, pass) => {
    const users = getTable('USERS');

    const user = users.filter(u => {
        if (u.name == nick) {
            return u;
        }
    });

    if (!user || user.length == 0 || user[0].password != pass) {
        window.alert('Credenciais incorretas');
        return;
    }

    window.localStorage.setItem('loggedUser', JSON.stringify(user[0].id));
    goToHome();
}

const checkValidations = () => {
    let failedValidations = [];
    for (const key in signInValidation) {
        if (!signInValidation[key]) {
            failedValidations.push(key);
        }
    }

    if (failedValidations.length > 0) {
        window.alert(`Os seguintes campos foram preenchidos incorretamente: ${failedValidations.join(', ')}`);
        return false;
    }

    return true;
}

const signUser = () => {
    if (!checkValidations()) {
        return;
    }

    const newNickname = document.getElementById('newNickname').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPass = document.getElementById('newPass').value;

    const newUser = {
        accessLevel: 0,
        profileImage: "../img/user-placeholder.png",
        name: newNickname,
        email: newEmail,
        password: newPass, /*SHA256*/
        completedQuizzes: {
            answeredQuestions: [],
            misses: 0
        },
        experience: 0,
        configurations: {
            theme: "light",
            reminders: true,
            tips: false,
            mainFontSize: 16
        }
    }

    insertIntoTable('USERS', newUser);
    doLogIn(newNickname, newPass);
}

const validateInput = (id, value) => {
    if (id == 'nickname' || id == 'password') {
        return true;
    }

    if (id == "newNickname") {
        return signInValidation[id] = (value && value != "");
    }

    if (id == "newEmail") {
        return signInValidation[id] = (value && value != "" && value.indexOf('@') > -1 && value.indexOf('.') > -1);
    }

    if (id == "newPass") {
        return signInValidation[id] = (value && value != "");
    }

    if (id == "repeatPass") {
        const newPass = document.getElementById('newPass').value;
        return signInValidation[id] = (value && value == newPass);
    }

    return false;
}

document.querySelectorAll('input').forEach(element => {
    element.addEventListener('input', event => {
        if (validateInput(element.id, element.value)) {
            element.style.border = '2px solid green';
        } else {
            element.style.border = '2px solid red';
        }
    });
})

const alternateLoginView = () => {
    if (alternate) {
        login.style.display = 'flex';
        signin.style.display = 'none';
        alternator.innerText = 'Cadastre-se';
    } else {
        login.style.display = 'none';
        signin.style.display = 'flex';
        alternator.innerText = 'Acesse sua conta';
    }

    alternate = !alternate;
}

alternateLoginView();
