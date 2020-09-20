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

//const titleCased = () => {
  //return tutorials
//}


const titleCased = () => {
  const newTutorials = tutorials.map(function(t){
    let string = t.split(' ')
    let uppc = string.map(function(t){
      return t.charAt(0).toUpperCase() + t.slice(1)
    })
    return uppc.join(' ')
  })
  return newTutorials
}

//returns an array with title case tutorial names