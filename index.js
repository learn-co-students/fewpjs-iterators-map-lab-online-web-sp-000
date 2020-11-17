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
    return tutorials.map(title => {
    let newTitles = title.split(" ")
    for (let i = 0; i < newTitles.length; i++) {
      newTitles[i] = newTitles[i].charAt(0).toUpperCase() + newTitles[i].slice(1)
    }
    return newTitles.join(" ")
  })
}