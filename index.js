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

function capitalizer(string) {
  return string.split(' ').map(function(word) {
    let wordArray = word.split('');
    let firstLetter = wordArray.shift();
    wordArray.unshift(firstLetter.toUpperCase());
    return wordArray.join('');
  }).join(' ');
}

const titleCased = () => {
  return tutorials.map(capitalizer)
};
