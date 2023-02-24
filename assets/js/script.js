const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
];

let targetDoc = document.querySelector('#target');

//GENERAL ELEMENTS
let body = document.querySelector('body');
let container = document.querySelector('.container');

//WELCOME PAGE ELEMENTS
let proceedBtn = document.querySelector('.proceed');

//BENCHMARK PAGE ELEMENTS
let ansCont = document.querySelector('.answers-container');
let nextBtn = document.querySelector('.next-question-btn');


//FUNCTIONS
function caricaBenchmarkPage() {
    fetch('benchmark_page.html')
        .then(res => res.text())
        .then(res => {
            body.innerHTML = "";
            let divOspite = document.createElement('div');
            divOspite.innerHTML = res
            body.append(divOspite);
        })
}

function caricaResultPage() {
    fetch('result_page.html')
        .then(res => res.text())
        .then(res => {
            body.innerHTML = "";
            let divOspite = document.createElement('div');
            divOspite.innerHTML = res
            body.append(divOspite);
        })
}

function caricaFeedbackPage() {
    fetch('result_page.html')
        .then(res => res.text())
        .then(res => {
            body.innerHTML = "";
            let divOspite = document.createElement('div');
            divOspite.innerHTML = res
            body.append(divOspite);
        })
}


//EVENTS
proceedBtn.addEventListener("click", () => caricaBenchmarkPage());

// nextBtn.addEventListener("click", () => {
//     else {
//         caricaResultPage();
//     }
// });
// ##########
// NEW LOGIC
// ##########
let rightAns,
    rightNumber = 0,
    falseNumber = 0;



document.addEventListener('DOMContentLoaded', function () {
    showQuestion();

    eventListeners();
});

eventListeners = () => {
    nextBtn.addEventListener('click', validateAnswer);

}

// function addQuestion() {
//     const url = 'https://opentdb.com/api.php?amount=10&category=25';
//     fetch(url)
//         .then(data => data.json())
//         .then(result => showQuestion(result.results));
// }

function showQuestion() {

    let questTitle = document.querySelector('.title-box')

    questions.forEach(question => {
        rightAns = question.correct_answer;

        let wronAns = question.incorrect_answers;
        wronAns.splice(Math.floor(Math.random() * 3), 0, rightAns);

        questTitle.textContent = question.question;

        const ansCont = document.createElement('button');
        ansCont.classList.add('answer-btn');

        wronAns.forEach(answer => {
            ansCont.textContent = answer;
            ansCont.onclick = selectAnswer;
        })
        ansCont.appendChild(answerDiv); /*Main wrapper */
    })
}




selectAnswer = (e) => {
    if (document.querySelector('.active')) {
        const activeAnswer = document.querySelector('.active');
        activeAnswer.classList.remove('active');
    }

    e.target.classList.add('active');
}

function validateAnswer() {
    if (document.querySelector('.questions .active')) {

        verifyAnswer();

    } else {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('alert', 'alert-danger', 'col-md-6');
        errorDiv.textContent = "Please select Answer";
        const questionsDiv = document.querySelector('.questions');
        questionsDiv.appendChild(errorDiv);

        setTimeout(() => {
            document.querySelector('.alert-danger').remove();
        }, 2000);

    }
}

function verifyAnswer() {
    const userAnswer = document.querySelector('.questions .active');
    if (userAnswer.textContent === rightAns) {
        rightNumber++;
    } else {
        falseNumber++;
    }

    const app = document.querySelector('#app');
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
    addQuestion();
}