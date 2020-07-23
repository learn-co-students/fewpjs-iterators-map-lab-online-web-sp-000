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
/* 
const titleCased = tutorials.map(tutorial => {
  // The split() method is used to split a string into an array of substrings, and returns the new array.
  // If an empty string ("") is used as the separator, the string is split between each character
  tutorial.split(' ')
  // The charAt() method returns the character at the specified index in a string.
  // The slice() method returns the selected elements in an array, as a new array object
  // The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
  // The join() method returns the array as a string.
  // The elements will be separated by a specified separator. The default separator is comma (,).
  for (let i = 0; i < tutorial.length; i++) {
    tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1)
  }
  return tutorial.join(' ');
});
*/
function titleCased() {
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  });
}


