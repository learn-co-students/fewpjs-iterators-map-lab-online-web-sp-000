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

// new array for titlized sentences
let master = []

const titleCased = () => {
  // separates each string into an array of words
  let strings = tutorials.map(string => string.split(" "))
  // iterates over each word and passes the changefirstletter function
  strings.map(word => capitalizeFirstLetter(word)) 
  return master
}

function capitalizeFirstLetter(word) {
  // array for capitalized words
  let newCap = []
  // goes through each letter in the word
  word.map( function(char) {
    // replaces first letter of each word to capitalize
    char = char.replace(char[0], char[0].toUpperCase())
    // pushes capitalized woed array
    newCap.push(char)
  })
  // joins capitalized words to make a sentence string
  let cap = newCap.join(" ")
  // pushes sentence string into master array of sentence strings
  master.push(cap)
}