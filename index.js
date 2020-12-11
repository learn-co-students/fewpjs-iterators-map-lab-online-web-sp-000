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
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(' ');
    for (let i = 0; i < tutorial.length; i++){
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1)
    }
    return tutorial.join(' ');
  });
}

for (let i = 0; i < tutorial.length; i++){
  tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice
}
//split the String into an array of words
//let arrayedTutorials = tutorials.map(function(tutorial)
  //{
  //  return tutorial.split(' ')

  //})

//takes an array of a sentance and upcases it
//let upcasedString = arr.map(function(word) {
	// return titleizeWord(word)
//})
//return upcasedString.join( ' ')

//method to titlecase a word
//function titleizeWord(word) {
  //let adjustedWord = word.charAt(0).toUpperCase() + word.slice(1)
  //return adjustedWord
//}

//for each tutorial array, titleizeWord(word) and returns new array from that
