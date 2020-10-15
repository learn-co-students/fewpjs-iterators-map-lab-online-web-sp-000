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
  tutorial = tutorial.split(' ');
  // each string in array is separated and now represented as variable 'tutorial'
  for (var i = 0; i < tutorial.length; i++) {
    tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    // have to define 'i' and create a for loop to iterate over each 'tutorial' string in the array
    // for whichever tutorial is up next, it is defined as 'tutorial[i]'
    // within tutorial[i], want to isolate the first word via charAt(0) and make it uppercase
    // what are we slicing at index (1)???
  }
  return tutorial.join(' ');
  // all of the words in the string are joined back together
  });
}
