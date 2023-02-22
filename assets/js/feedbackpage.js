let allStars = document.querySelectorAll('.star')


allStars.forEach((star, i) => {
    star.onclick = function () {
        let current_star_level = i + 1;

        allStars.forEach((star, j) => {
            if (current_star_level >= j + 1) {
                console.log("mi hai selezionato");
            } else {
                star.classList.remove('feedbackStars')
                
            }
        })
    }
})


