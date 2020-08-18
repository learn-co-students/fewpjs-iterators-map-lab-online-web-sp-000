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
function titleCased() {
  return tutorials.map(function(tutorial) {
    let splitted = tutorial.split(' ');
  for (var i = 0; i < splitted.length; i++) {
    splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1);
  }
  return splitted.join(' ');
  });
}

console.log(titleCased);


