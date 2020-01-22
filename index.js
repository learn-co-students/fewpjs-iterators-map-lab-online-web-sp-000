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

  return tutorials.map(function (tutorial) {
//transformation
    tutorial = tutorial.split(' ');
//slpit at each individual string 
    for (var i = 0; i < tutorial.length; i++) {
//iterate over each word in string
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);

     // combine
    // the first letter capitalized aka charAt(0).touppercase
    //and the rest of the word after that letter

  }
 return tutorial.join(' ');
 // return array with all strings
});
}
