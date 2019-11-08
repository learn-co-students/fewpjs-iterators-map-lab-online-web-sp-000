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

const capitalize = word => {
  if ( word ) {
    let first = word[0].toUpperCase()
    let rest = word.slice( 1 )
    return `${first}${rest}`
  }
}

const capitalizeAll = arr => {
  return arr.map( capitalize )
}

const titleCased = () => {
  let titles = tutorials.map( x => x.split(' ') )
  let titlesCased = titles.map( capitalizeAll )
  let flattenedPhrases = titlesCased.map( x => x.join(' ') )
  return flattenedPhrases
}
