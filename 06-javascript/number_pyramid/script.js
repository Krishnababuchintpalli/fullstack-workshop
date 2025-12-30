const printPyramid = (n) => {
  Array.from({ length: n }, (_, i) => {
    const level = i + 1;

    const spaces = " ".repeat(n - level);

    const leftNumbers = Array.from({ length: level }, (_, j) => j + 1).join("");

    const rightNumbers = Array.from(
      { length: level - 1 },
      (_, j) => level - j - 1
    ).join("");

    console.log(`${spaces}${leftNumbers}${rightNumbers}`);
  });
};

printPyramid(5);
