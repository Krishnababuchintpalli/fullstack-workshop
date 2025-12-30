const display = document.querySelector('.score');
let score = Number(display.textContent);

const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');
const increment = document.querySelector('.increment');

const stepButtons = [
  { element: document.querySelector('.step1'), value: 1 },
  { element: document.querySelector('.step5'), value: 5 },
  { element: document.querySelector('.step10'), value: 10 }
];

let step = 1;

// Update display
const updateDisplay = () => {
  display.textContent = score;
};

// Decrement
decrement.addEventListener('click', () => {
  if (score - step < 0) {
    alert(`Score cannot be less than 0`);
    return;
  }
  score -= step;
  updateDisplay();
});

// Increment
increment.addEventListener('click', () => {
  score += step;
  updateDisplay();
});

// Reset
reset.addEventListener('click', () => {
  score = 0;
  updateDisplay();
});

// Step buttons using array method
stepButtons.forEach(({ element, value }) => {
  element.addEventListener('click', () => {
    step = value;
  });
});
