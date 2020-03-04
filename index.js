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

 return tutorials.map(function(el) {
    // let x = el.split(" ")
    return el.split(' ').map(function(word) {
      return (word[0].toUpperCase() + word.slice(1));
    }).join(' ');
      //  return x.map(function(word) {
      //    let y = word.split('')
      //    let t = y[0]
      //    let v = t.toUpperCase()
      //    y[0] = v
      //    y.join('')
      //  })
})
}
