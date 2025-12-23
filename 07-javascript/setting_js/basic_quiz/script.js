let score=0;
let question1=prompt('What is the result of 5+3 ?')
question1=Number(question1);
score=(question1==8)?(score+10):score+0
let question2=prompt("What is the capital of France?")
score=(question2.toLowerCase()=="paris")?(score+10):score+0
let question3=prompt("What color is the sky ?")
score=(question3.toLowerCase()=="blue")?(score+10):score+0
alert(`Your results are here ! you scored ${score} `)