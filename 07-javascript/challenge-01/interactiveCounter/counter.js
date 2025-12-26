let display=document.querySelector('.score')
let score=Number(display.textContent)
const decrement=document.querySelector('.decrement')
const reset=document.querySelector('.reset')
const increment=document.querySelector('.increment')
const step1=document.querySelector('.step1')
const step5=document.querySelector('.step5')
const step10=document.querySelector('.step10')

let step = 1;

decrement.addEventListener('click', function () {
    if (score - step < 0) {
        alert("Score cannot be less than 0");
        return;
    }
    score -= step;
    display.textContent = score;
});


increment.addEventListener('click', function () {
    score += step;
    display.textContent = score;
});

reset.addEventListener('click', function () {
    score = 0;
    display.textContent = score;
});


step1.addEventListener('click', function () {
    step = 1;
});

step5.addEventListener('click', function () {
    step = 5;
});

step10.addEventListener('click', function () {
    step = 10;
});
