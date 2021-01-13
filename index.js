const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const capitalize = (str) => str.slice(0,1).toUpperCase() + str.slice(1);

// (str) => str.slice(0,1).toUpperCase() + str.slice(1)
const titleCased = () => {
  return tutorials.map((str) => {
    return str.split(" ").map(word => capitalize(word)).join(" ")
  })
}

