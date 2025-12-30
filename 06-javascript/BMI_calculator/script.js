// Arrow function to calculate BMI category
const calculateBMI = (weight, height) => {
  const bmi = weight / (height ** 2);

  const categories = [
    { max: 18.5, label: "Underweight" },
    { max: 24.9, label: "Normal" },
    { max: 29.9, label: "Overweight" },
    { max: Infinity, label: "Obese" }
  ];

  return categories.find(category => bmi <= category.max).label;
};

// Get user input
const weight = Number(prompt("Enter your weight in kgs"));
const height = Number(prompt("Enter your height in meters"));

// Validate input
if (weight > 0 && height > 0) {
  const result = calculateBMI(weight, height);
  alert(`Your BMI category is: ${result}`);
} else {
  alert(`Please enter valid positive numbers for weight and height`);
}
