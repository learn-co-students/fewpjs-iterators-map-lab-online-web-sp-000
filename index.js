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
  let tutorialsSplit = tutorials.map( line => line.split(' '));
  let capBrokenWords = tutorialsSplit.map (function(tutorialStringArray) {
    return tutorialStringArray.map ( string => capitalize(string));
  });
  let set = capBrokenWords.map (str => str.join(' '));
  console.log(set);
  return set;
  
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}
