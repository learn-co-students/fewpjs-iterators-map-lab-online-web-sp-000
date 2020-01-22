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
  const tut = tutorials.map(function(e){
    let str = e.split(' ')
    let upStr = str.map(function(e){
      return e.charAt(0).toUpperCase() + e.slice(1)
    })
    return upStr.join(' ')
  })
  return tut
}
