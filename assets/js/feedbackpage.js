let stelle= document.getElementsByClassName('star')

let stelleSelezionate =[]

 for (let stella of stelle) {
    stella.addEventListener('click',function () {
            stelleSelezionate += stella.classList.add('feedbackStars')
        })
}


console.log(stelle)
