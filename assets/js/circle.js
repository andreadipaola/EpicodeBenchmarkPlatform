
const input = document.querySelector('input');
input.addEventListener('change', function() {
  let value = parseInt(this.value) || 0;
  

  if (value > 100) {
    value = 100;
  } else if (value < 0) {
    value = 0;
  }

  let circle = document.querySelector('.svg #bar');
  const r = circle.getAttribute('r');
  const c = Math.PI * r * 2;
  const pct = ((100 - value) / 100) * c;

  circle.style.strokeDashoffset = pct;

  const percentageElements = document.getElementsByClassName('percentage');
  for (let i = 0; i < percentageElements.length; i++) {
    percentageElements[i].innerHTML = value + '%';
  }
});
