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

// Title Case with a `For` Loop:

// const titleCased = () => {
//   return tutorials.map(function(tutorial) {
//     tutorial = tutorial.split(' ');
//     for (let i = 0; i < tutorial.length; i++) {
//       tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
//     }
//     return tutorial.join(' ');
//   });
// }

// Title Case with the `map()` Method:

// const titleCased = () => {
//   return tutorials.map(tutorial => {
//     tutorial = tutorial.split(' ');
//     return tutorial.map(word => {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
//   });
// }

// Title Case with the `map()` and `remove()` methods
const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  });
}