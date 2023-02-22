import createElement from "./Funzioni.js"
//import createFullElement from "./Funzioni.js"

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






let proceed = document.getElementById('proceed')
let container = document.querySelector('.container')

//############################################################################################################
//                                         benchmarkpage
//############################################################################################################

let logo = document.createElement('img', 'logo')
logo.src = 'assets/img/epicode_logo.png'
logo.classList = 'logo'
let logoBox = createElement('div', 'bheader-box')
let app = createElement('div')
app.id = 'app'


let titleBox = createElement('div', 'title-box');
let answerContainer = createElement('div', 'answer-container');
let buttonContainer = createElement('div', 'bottoneProssimo');
let bottone = createElement('button', 'prossimo');
bottone.textContent = 'NEXT';
let footerBox = createElement('div', 'footer-box');
let pFooter = createElement('p', 'pfooter');
let rosato = createElement('span', 'rosato');
pFooter.textContent = 'question 1';
rosato.textContent = '\\10';


proceed.addEventListener('click', () => {
    container.textContent = ''

    container.appendChild(logoBox).appendChild(logo)
    logoBox.appendChild(app)

    container.appendChild(titleBox);
    container.appendChild(answerContainer);
    container.appendChild(buttonContainer).appendChild(bottone)
    container.appendChild(footerBox).appendChild(pFooter).appendChild(rosato);

    
})



/*let risposte = document.getElementsByClassName('.risposte')
// let next = document.querySelector('.prossimo')
let target = document.querySelector('.answer-container')
//let bottoneProssimo =document.querySelector('.bottoneProssimo')

let timer = document.querySelector("#app");
next.addEventListener("click",() => timePassed = -1);

let domandeRisposte = []

for (let opzioni  of questions) {
 let option=[]
 let titoli= opzioni.question
 
 
  let sbagliate = opzioni.incorrect_answers
  sbagliate.push(opzioni.correct_answer)
  option.push(sbagliate)



  domandeRisposte.push({
    domanda : titoli ,
    risposte : option
  })
}


  
  bottone.addEventListener('click',()=>{
  let targeTitolo = titleBox
  target.textContent=''
  targeTitolo.textContent=''

  let bottone1 = document.createElement('button')
  let bottone2 = document.createElement('button')
  let bottone3 = document.createElement('button')
  let bottone4 = document.createElement('button')

  bottone1.classList.add('risposte')
  bottone2.classList.add('risposte')
  bottone3.classList.add('risposte')
  bottone4.classList.add('risposte')

  let indice= Math.floor(Math.random()*domandeRisposte.length)

  for (let risposta of domandeRisposte[indice].risposte) {
  
    
   for(let i = 0; i < risposta.length; i++) {
   
    bottone1.textContent=risposta[0]
    bottone2.textContent=risposta[1]
    bottone3.textContent=risposta[2]
    bottone4.textContent=risposta[3]
    
    if(risposta.length == 2){
      target.appendChild(bottone1)
      target.appendChild(bottone2)
    }else{
      target.appendChild(bottone1)
      target.appendChild(bottone2)
      target.appendChild(bottone3)
      target.appendChild(bottone4)
    }
    
   }
    console.log(bottone1)
    
    let titolo = document.createElement('p')
    titolo.classList.add('titolo')
    titolo.textContent = domandeRisposte[indice].domanda
    targeTitolo.appendChild(titolo)
    

  }

  domandeRisposte.splice(indice,1)

  
 
})
//}else{

  
  /*next.addEventListener('click',()=>{
      bottoneProssimo.textContent=''
      let a = document.createElement('a')
      a.classList.add('prossimo')
      let attributi = document.createAttribute('href')
      attributi.value="results.html"
      a.setAttributeNode(attributi)
  })*/
//}


//##########################################################################################################
//                                            resultspage
//##########################################################################################################

let paragraph = createElement('p');
let spanS = createElement('span');


bottone.addEventListener('click',()=>{
    container.textContent=''
    let logoBox1 = createElement('div', 'bheader-box')
    container.appendChild(logoBox1).appendChild(logo)
    

    
    

    //risultati

    let titoloRis = document.createElement('div')
    titoloRis.id = 'risultati'
    container.appendChild(titoloRis)
    let p1 = document.createElement('p')
    p1.textContent = 'Results'
    titoloRis.appendChild(p1)
    let p2 = document.createElement('p')
    p2.textContent ='The summary of your answer'
    titoloRis.appendChild(p2)


    //riga centrale
        
    let rigaCentrale = createElement('div','riga-centrale');
    let corretti = createElement('div', 'corretti');
    let cerchio = createElement('div', 'cerchio');
    let sbagliati = createElement('div','sbagliati');
    container.appendChild(rigaCentrale).appendChild(corretti);
    container.appendChild(rigaCentrale).appendChild(cerchio);
    container.appendChild(rigaCentrale).appendChild(sbagliati);
    


    


    //rate us
    let rateuss = createElement('div', 'rateuss');
    let cta = createElement('button', 'cta');
    cta.textContent= 'RATE US'
    



})

