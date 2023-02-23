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

let timer = document.querySelector("#app");
next.addEventListener("click", () => timePassed = -1);

let target = document.querySelector('.answers-container')
let risposte = document.getElementsByClassName('.answer-container')
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




next.addEventListener('click', () => {
  let targeTitolo = document.querySelector('.title-box')
  target.textContent = ''
  targeTitolo.textContent = ''

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
    // titolo.classList.add('titolo')
    titolo.textContent = domandeRisposte[indice].domanda
    targeTitolo.appendChild(titolo)

  }

  domandeRisposte.splice(indice, 1)



})
