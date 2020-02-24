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
  return tutorials.map(function(title){
    let wordArray = title.split(" ")

    for (let i = 0; i < wordArray.length; i++) {
      wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }

    return wordArray.join(" ")
    
  })
}


