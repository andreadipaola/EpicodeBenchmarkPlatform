let allStars= document.querySelectorAll('.star')

allStars.forEach((star,i)=>{
    star.onclick = function(){
        let current_star_level = i + 1;
        
        allStars.forEach((star,j)=>{
            if(current_star_level >= j+1){
                star.classList.add('feedbackStars')  
            }else{
                star.classList.remove('feedbackStars')
            }
        })
    }
})

