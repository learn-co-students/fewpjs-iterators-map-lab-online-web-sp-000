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
  return tutorials.map(function(tutorial){
    let words = tutorial.split(' ');
    let capWords = []
    for (const word of words) {
      const letters = word.split('');
      letters[0] = letters[0].toUpperCase();
      capWords.push(letters.join(''));
    }
    console.log(capWords.join(' ')); //! This reads out each tutorial, cased correctly, that I want to capture with map.
    return capWords.join(' ');
    });
}

// const titleCased = titleCasedFunction(tutorials);
// console.log(titleCasedFunction(tutorials));

//   function titleCasedFunction(tutorials){
//     tutorials.map(function(tutorial){
//       let words = tutorial.split(' ');
//       let capWords = []
//       for (const word of words) {
//         const letters = word.split('');
//         letters[0] = letters[0].toUpperCase();
//         capWords.push(letters.join(''));
//       }
//       console.log(capWords.join(' ')); //! This reads out each tutorial, cased correctly, that I want to capture with map.
//       return capWords.join(' ');
//       });
//   }

