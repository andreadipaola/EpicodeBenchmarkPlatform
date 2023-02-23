let proceed = document.querySelector('.proceed');
let targetDoc = document.querySelector('#target');
let container = document.querySelector('.container');
let index = 0
let next = document.querySelector('.next-question-btn')

proceed.addEventListener('click', () => {
    container.textContent = ''
    container.style.display = 'none'

    fetch('benchmark_page.html')
        .then(res => res.text())
        .then(res => {


            let divOspite = document.createElement('div');
            divOspite.innerHTML = res

            targetDoc.append(divOspite);

            //##########################################################################################################
            //                                              timer
            //##########################################################################################################

            const FULL_DASH_ARRAY = 283;
            const WARNING_THRESHOLD = 10;
            const ALERT_THRESHOLD = 5;

            const COLOR_CODES = {
                info: {
                    color: "green"
                },
                warning: {
                    color: "orange",
                    threshold: WARNING_THRESHOLD
                },
                alert: {
                    color: "red",
                    threshold: ALERT_THRESHOLD
                }
            };

            const TIME_LIMIT = 20;
            let timePassed = 0;
            let timeLeft = TIME_LIMIT;
            let timerInterval = null;
            let remainingPathColor = COLOR_CODES.info.color;

            //da sistemare variabile
            let timer = document.getElementById("app").innerHTML = `
        <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg>
            <span class="text-timer1">SECONDS</span>
        <span id="base-timer-label" class="base-timer__label">${formatTime(
                timeLeft
            )}</span>
        <span class="text-timer">REMAINING</span>  

        </div>
        `;

            startTimer();

            function onTimesUp() {
                // clearInterval(timerInterval);
                domande();
            }

            function startTimer() {
                timerInterval = setInterval(() => {
                    timePassed = timePassed += 1;
                    timeLeft = TIME_LIMIT - timePassed;
                    document.getElementById("base-timer-label").innerHTML = formatTime(
                        timeLeft
                    );
                    setCircleDasharray();
                    setRemainingPathColor(timeLeft);

                    if (timeLeft === 0) {
                        onTimesUp();

                    }
                }, 1000);
            }

            function formatTime(time) {
                let seconds = time;

                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }

                return `${seconds}`;
            }

            function setRemainingPathColor(timeLeft) {
                const { alert, warning, info } = COLOR_CODES;
                if (timeLeft <= alert.threshold) {
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.remove(warning.color);
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.add(alert.color);
                } else if (timeLeft <= warning.threshold) {
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.remove(info.color);
                    document
                        .getElementById("base-timer-path-remaining")
                        .classList.add(warning.color);
                }
            }

            function calculateTimeFraction() {
                const rawTimeFraction = timeLeft / TIME_LIMIT;
                return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
            }

            function setCircleDasharray() {
                const circleDasharray = `${(
                    calculateTimeFraction() * FULL_DASH_ARRAY
                ).toFixed(0)} 283`;
                document
                    .getElementById("base-timer-path-remaining")
                    .setAttribute("stroke-dasharray", circleDasharray);
            }


            //#############################################################################################################
            //                                             domande  
            //#############################################################################################################
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

            let target = document.querySelector('.answers-container')

            let next = document.querySelector('.next-question-btn')

            let domandeRisposte = []

            for (let opzioni of questions) {
                let option = []
                let titoli = opzioni.question


                let sbagliate = opzioni.incorrect_answers
                sbagliate.push(opzioni.correct_answer)
                option.push(sbagliate)



                domandeRisposte.push({
                    domanda: titoli,
                    risposte: option
                })
            }

            domande()

            next.addEventListener('click', () => { domande() })
            function domande() {
                let targeTitolo = document.querySelector('.title-box')
                target.textContent = ''
                targeTitolo.textContent = ''

                timePassed = -1
                // timer.classList.add("time-back-transition");

                let bottone1 = document.createElement('button')
                let bottone2 = document.createElement('button')
                let bottone3 = document.createElement('button')
                let bottone4 = document.createElement('button')

                bottone1.classList.add('answer-btn')
                bottone2.classList.add('answer-btn')
                bottone3.classList.add('answer-btn')
                bottone4.classList.add('answer-btn')

                let indice = Math.floor(Math.random() * domandeRisposte.length)

                for (let risposta of domandeRisposte[indice].risposte) {


                    for (let i = 0; i < risposta.length; i++) {

                        bottone1.textContent = risposta[0]
                        bottone2.textContent = risposta[1]
                        bottone3.textContent = risposta[2]
                        bottone4.textContent = risposta[3]

                        if (risposta.length == 2) {
                            target.appendChild(bottone1)
                            target.appendChild(bottone2)
                        } else {
                            target.appendChild(bottone1)
                            target.appendChild(bottone2)
                            target.appendChild(bottone3)
                            target.appendChild(bottone4)
                        }

                    }
                    console.log(bottone1)

                    let titolo = document.createElement('p')
                    titolo.textContent = domandeRisposte[indice].domanda
                    titolo.classList.add('question-title');
                    targeTitolo.appendChild(titolo)

                }

                domandeRisposte.splice(indice, 1)


                index += 1
                let questionNum = document.querySelector('#numDoma')
                questionNum.textContent = `QUESTION ${index}`
            }

            if (index == 10) {
                next.addEventListener('click', () => {
                    container.textContent = ''
                    container.style.display = 'none'
                })

                /*fetch('results_page.html')
                .then(res => res.text())
                .then(res => {
        
                
                    let divOspite = document.createElement('div');
                    divOspite.innerHTML = res
                    
                    targetDoc.append(divOspite);
                    
                })})*/
            }

        })
})






/*function newAnswer(answerObj){    


fetch('template.html')
.then(res => res.text())
.then(res => {



//questo div serve a convertire la stringa html in oggetto html
let divOspite = document.createElement('div');//creo un elemento ospite
divOspite.innerHTML = res

let html = divOspite.querySelector('.slide')//ricevo oggetto html

console.log(divOspite)

target.innerHTML = '';
console.log(html)

//seleziono gli elementi
let titleDOM = html.querySelector('.title')
let answersDOM = html.querySelector('.answers')


//inserisco contenuto
titleDOM.textContent = answerObj.title

for(let risp of answerObj.risposte){

    let optionClone = html.querySelector('.answers .option').cloneNode()
    optionClone.textContent = risp;

    answersDOM.append(optionClone);

}

html.querySelector('.answers .option').remove()//rimuovo la prima option

target.append(html)

})

}*/