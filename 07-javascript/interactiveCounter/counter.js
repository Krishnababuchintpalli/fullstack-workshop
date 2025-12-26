let display=document.querySelector('.score')
let score=Number(display.textContent)
const decrement=document.querySelector('.decrement')
const reset=document.querySelector('.reset')
const increment=document.querySelector('.increment')
const step1=document.querySelector('.step1')
const step5=document.querySelector('.step5')
const step10=document.querySelector('.step10')

function colorChange(){
    if(score==0){
        display.style.color='white'
        //display.style.background-color = 'black';

    }
}

decrement.addEventListener('click', function() {
    if(score<=0){
        alert("Score cannot be less than 0");
        return;
    }
    score--;
    display.innerHTML=score;
});

increment.addEventListener('click', function() {
    score++;
    display.innerHTML=score;
});
reset.addEventListener('click', function() {
    score=0;
    display.innerHTML=score;
});
step1.addEventListener('click', function() {
    score+=1;
    display.innerHTML=score;
});
step5.addEventListener('click', function() {
    score+=5;
    display.innerHTML=score;
});
step10.addEventListener('click', function() {
    score+=10;
    display.innerHTML=score;
});
