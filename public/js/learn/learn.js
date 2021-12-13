const user = getById('USERS', window.localStorage.getItem('loggedUser'));
const allChaptersBySubject = JSON.parse(window.localStorage.getItem('CHAPTERS'));

const screen = document.getElementById('chaptersHolder');
const chaptersListHolder = document.getElementById('chaptersList');
const chapterShowHolder = document.getElementById('chapterShow');
const backLink = document.getElementById('backLink');
const learnTitle = document.getElementById('learnTitle');
const quizzButton = document.getElementById('quizzButton');

const goToHome = () => {
    let a = document.createElement('a');
    a.href = './home.html'
    a.click();
}

const goToQuizz = (subject) => {
    window.localStorage.setItem('requestedQuizz', subject);
    let a = document.createElement('a');
    a.href = './quiz.html'
    a.click();
}

const renderChaptersBySubject = () => {
    const chaptersSubjects = Object.keys(allChaptersBySubject);

    let chaptersListInnerHTML = `<div class="subjectsList">`;

    for (const subject of chaptersSubjects) {
        chaptersListInnerHTML += `
            <div class="listedSubject" onclick="renderChapters('${subject}')">
                <span class="float-left">${translate(subject)}</span>
            </div>
        `;
    }

    chaptersListInnerHTML += `</div>`

    chaptersListHolder.innerHTML = chaptersListInnerHTML;
    learnTitle.innerHTML = `Sobre o que deseja aprender?`;
    backLink.onclick = () => goToHome();
    chapterShowHolder.style.display = 'none';
    quizzButton.style.display = 'none';
    chaptersListHolder.style.display = 'flex';
}

const renderChapters = (subject) => {
    const chapters = allChaptersBySubject[subject];

    let chapterInnerHTML = `<div class="chaptersListOfSubject">`;

    for (const chapter of chapters) {
        chapterInnerHTML += `
            <div class="chapter">
                <h3>${chapter.title}</h3>
                <br/>
                <div>${chapter.desc}<br/>
        `;

        if (chapter.subChapters.length > 0) {
            chapterInnerHTML += `<div class="accordion" id="accordionExample">`;
            chapter.subChapters.forEach((subChapter, index) => {
                chapterInnerHTML += `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading-${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}">
                                ${subChapter.title}
                            </button>
                        </h2>
                        <div id="collapse-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${index}" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                ${subChapter.desc}
                            </div>
                        </div>
                    </div>
                `;
            });
            chapterInnerHTML += `</div>`;
        }

        chapterInnerHTML += `
                </div>
            </div>
        `;
    }

    chapterInnerHTML += `</div>`

    quizzButton.onclick = () => goToQuizz(subject);
    chapterShowHolder.innerHTML = chapterInnerHTML;
    learnTitle.innerHTML = translate(subject);
    backLink.onclick = () => renderChaptersBySubject();
    chaptersListHolder.style.display = 'none';
    quizzButton.style.display = 'block';
    chapterShowHolder.style.display = 'flex';
}

renderChaptersBySubject();