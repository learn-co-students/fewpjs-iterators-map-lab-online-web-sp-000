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
  let answer = tutorials.map(word =>{
    let arrayWords = word.split(' ')
    let results = []
    for (var i = 0; i < arrayWords.length; i++) {
      results.push(arrayWords[i].charAt(0).toUpperCase() + arrayWords[i].slice(1))
    }
    return results.join(" ")
  })
  return answer
};