let score = 0;

// Arrow function to ask question and update score
const askQuestion = (question, correctAnswer, points = 10) => {
  const userAnswer = prompt(question);

  if (userAnswer === null) return 0;

  return userAnswer.toLowerCase() === correctAnswer ? points : 0;
};

// Questions array
const questions = [
  { q: "What is the result of 5 + 3 ?", a: "8" },
  { q: "What is the capital of France?", a: "paris" },
  { q: "What color is the sky?", a: "blue" }
];

// Using array method (forEach)
questions.forEach(item => {
  score += askQuestion(item.q, item.a);
});

alert(`Your results are here! You scored ${score}`);
