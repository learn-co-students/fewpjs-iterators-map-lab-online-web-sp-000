//all the titles need to be "title case", in other words, the first letter of each word is capitalized.
//Create a new array with the new names of each tutorial that is in the proper title case formatting.

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
    return tutorial.split(" ").map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  });
}

//LAB SOLUTION
// function titleCased() {
//   return tutorials.map(function (tutorial) {
//     tutorial = tutorial.split(' ');
//     for (var i = 0; i < tutorial.length; i++) {
//       tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
//     }
//     return tutorial.join(' ');
//   });
// }