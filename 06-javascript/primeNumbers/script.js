const findPrimes = (limit) => {
  return Array.from({ length: limit - 1 }, (_, i) => i + 2)
    .filter(num =>
      Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, j) => j + 2)
        .every(divisor => num % divisor !== 0)
    );
};

console.log(`Prime numbers up to 30: ${findPrimes(30).join(", ")}`);
