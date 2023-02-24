// const input = document.querySelector('input');
// input.addEventListener('change', function() {
//   let value = parseInt(this.value) || 0;
  

//   if (value > 100) {
//     value = 100;
//   } else if (value < 0) {
//     value = 0;
//   }

//   let circle = document.querySelector('.svg #bar');
//   const r = circle.getAttribute('r');
//   const c = Math.PI * r * 2;
//   const pct = ((100 - value) / 100) * c;

//   circle.style.strokeDashoffset = pct;

//   const percentageElements = document.getElementsByClassName('percentage');
//   for (let i = 0; i < percentageElements.length; i++) {
//     percentageElements[i].innerHTML = value + '%';
//   }
// });

// Definizione dei dati del grafico

/*let correctAnswers = 8;
let totalQuestions = 10;
let percentage = Math.round(correctAnswers / totalQuestions * 100);

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Correct Answers', 'Incorrect Answers'],
        datasets: [{
            label: ['% Correct','% Incorrect'],
            data: [percentage, 100 - percentage],
            backgroundColor: ['#00ffff', '#d20094']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Quiz Results'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.labels[context.dataIndex] + '\n' + value + '%';
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 16
                }
            }
        }
    }
});

let message = '';
if (percentage >= 70) {
  message = 'Congratulations! You passed the exam. I will send you the certificate in a few minutes. Please check your email (including promotions and spam folder).';
} else {
  message = 'Oh no! Unfortunately, you did not pass the exam. Better luck next time.';
}

let container = document.querySelector('.container');
let messageDiv = document.createElement('div');
messageDiv.classList.add('message');
messageDiv.textContent = message;
container.appendChild(messageDiv);*/
