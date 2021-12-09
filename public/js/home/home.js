const user = getById('USERS', window.localStorage.getItem('loggedUser'))

const validateAccess = () => {
    if (user.accessLevel == 0) {
        return;
    }

    const navLinks = document.getElementsByClassName('navLinks')[0];

    navLinks.innerHTML += `<a class="homeLink" id="quizzManager" href="./quizManager.html"><span>Gerenciar</span></a>`;
}

validateAccess();