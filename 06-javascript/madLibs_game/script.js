const getInput = (message) => prompt(message);

// Collect inputs using array method
const inputs = [
  "Enter a name:",
  "Enter an adjective:",
  "Enter a noun:",
  "Enter a verb:",
  "Enter a place:"
].map(getInput);

const [name, adjective, noun, verb, place] = inputs;

// Create stories using array
const stories = [
  `One day, ${name} found a ${adjective} ${noun} that could ${verb} in the ${place}.`,
  `${name} was walking through the ${place} when they discovered a ${adjective} ${noun}. It started to ${verb} right in front of them!`,
  `In the mysterious ${place}, ${name} met a ${adjective} ${noun} who loved to ${verb} all day long.`,
  `While exploring the ${place}, ${name} stumbled upon a magical ${adjective} ${noun} that knew how to ${verb}.`,
  `${name} couldn't believe their eyes when a ${adjective} ${noun} began to ${verb} wildly in the ${place}!`
];

// Print all stories
console.log(stories.join("\n\n"));
