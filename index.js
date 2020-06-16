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

const titleCased = () => {
  return tutorials.map(function(title){
    let letters = title.split("");
    title = '';
    let previous = ' ';
    for (let i = 0; i < letters.length; i++) {
      if (previous === ' ') {
        title += letters[i].toUpperCase();
      } else {
        title += letters[i];
      }
      previous = letters[i];
    }
    return title;
  });
}
