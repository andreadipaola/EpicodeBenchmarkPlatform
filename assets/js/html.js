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

let cta = createElement('button', 'rate');

bottone.addEventListener('click', () => {
  container.textContent = ''
  let logoBox1 = createElement('div', 'bheader-box')
  container.appendChild(logoBox1).appendChild(logo)





  //risultati

  let titoloRis = createElement('div','risultati')
  //titoloRis.id = 'risultati'
  container.appendChild(titoloRis)
  let p1 = document.createElement('p')
  p1.textContent = 'Results'
  titoloRis.appendChild(p1)
  let p2 = document.createElement('p')
  p2.textContent = 'The summary of your answer'
  titoloRis.appendChild(p2)


  //riga centrale

  let rigaCentrale = createElement('div', 'riga-centrale');
  let corretti = createElement('div', 'corretti');
  let cerchio = createElement('div', 'cerchio');
  let sbagliati = createElement('div', 'sbagliati');
  container.appendChild(rigaCentrale).appendChild(corretti);
  container.appendChild(rigaCentrale).appendChild(cerchio);
  container.appendChild(rigaCentrale).appendChild(sbagliati);
  
  //corretti
  let span1 = createElement('span');
  span1.textContent = 'Correct';
  corretti.appendChild(span1);

  let span2 = createElement('span');
  span2.textContent = '66.7%';
  corretti.appendChild(span2);

  let span3 = createElement('span');
  span3.textContent = '4/6 questions';
  corretti.appendChild(span3);

  //cerchio
  let span7 = createElement('span');
  span7.textContent = 'Congratulations!';
  cerchio.appendChild(span7);

  let span8 = createElement('span');
  span8.textContent = 'You passed the exam.';
  cerchio.appendChild(span8);

  let paragraph = createElement('p');
  paragraph.textContent ='ll send you the certificate in few minutes. Check your email (including promotions / spam folder)'
  cerchio.appendChild(paragraph);

  //sbagliati
  let span4 = createElement('span');
  span4.textContent = 'Wrong';
  sbagliati.appendChild(span4);

  let span5 = createElement('span');
  span5.textContent = '33.3%';
  sbagliati.appendChild(span5);

  let span6 = createElement('span');
  span6.textContent = '2/6 questions';
  sbagliati.appendChild(span6);
 

  








  //rate us
  let rateus = createElement('div', 'rateuss');
  //let cta = createElement('button', 'rate');
  cta.textContent = 'RATE US'
  rateus.appendChild(cta)
  container.appendChild(rateus)


})

//###############################################################################################################
//                                          feedbackpage
//###############################################################################################################

cta.addEventListener('click',()=>{
  container.textContent= ' '

  let logoBox1 = createElement('div', 'bheader-box')
  container.appendChild(logoBox1).appendChild(logo)
  
  let divb = createElement('div','feedBody')
  container.appendChild(divb)

  let h2= document.createElement('h2');
  h2.textContent= 'Tell us how it \'s going'
  divb.appendChild(h2)
  let pDesk = createElement('p','par')
  pDesk.textContent='From 0 to 10,how likely are you to recommend EPICODE to a friend or a colleague?'
  divb.appendChild(pDesk)
  let divStelle= createElement('div','stelle')
  divb.appendChild(divStelle)

  let stella1=createElement('img','star')
  stella1.src= "assets/img/star.svg"
  divStelle.appendChild(stella1)
  let stella2=createElement('img','star')
  stella2.src= "assets/img/star.svg"
  divStelle.appendChild(stella2)
  let stella3=createElement('img','star')
  stella3.src= "assets/img/star.svg"
  divStelle.appendChild(stella3)
  let stella4=createElement('img','star')
  stella4.src= "assets/img/star.svg"
  divStelle.appendChild(stella4)
  let stella5=createElement('img','star')
  stella5.src= "assets/img/star.svg"
  divStelle.appendChild(stella5)
  let stella6=createElement('img','star')
  stella6.src= "assets/img/star.svg"
  divStelle.appendChild(stella6)
  let stella7=createElement('img','star')
  stella7.src= "assets/img/star.svg"
  divStelle.appendChild(stella7)
  let stella8=createElement('img','star')
  stella8.src= "assets/img/star.svg"
  divStelle.appendChild(stella8)
  let stella9=createElement('img','star')
  stella9.src= "assets/img/star.svg"
  divStelle.appendChild(stella9)
  let stella10=createElement('img','star')
  stella10.src= "assets/img/star.svg"
  divStelle.appendChild(stella10)
  //input
  let pFeed = createElement('p','feedback');
  pFeed.textContent = 'Leave us an open feedback about your experience so far';
  divb.appendChild(pFeed);
  
  let iFeed = createElement('input','finput');
  iFeed.type = 'text';
  iFeed.placeholder = 'Write your comment here';
  divb.appendChild(iFeed);
  let bFeed = createElement('button','Wcta');
  bFeed.textContent = 'MORE INFO';
  divb.appendChild(bFeed);
  
})

//##############################################################################################################
//                                          feedbackpage stars
//##############################################################################################################

//  


let allStars = document.querySelectorAll('.star')


allStars.forEach((star, i) => {
    star.onclick = function () {
        let current_star_level = i + 1;

        allStars.forEach((star, j) => {
            if (current_star_level >= j + 1) {
              star.classList.ad('feedbackStars')
                console.log("mi hai selezionato");
            } else {
                star.classList.remove('feedbackStars')
                
            }
        })
    }
})


