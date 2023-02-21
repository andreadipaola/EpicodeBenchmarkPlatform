let stelle= document.getElementsByClassName('star')

for (let stella of stelle) {
    stelle.addEventListener(()=>{
        stella.classList.add('feedbackStars')
    })
}

console.log(stelle)
