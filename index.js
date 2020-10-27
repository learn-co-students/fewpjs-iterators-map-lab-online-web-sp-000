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
  return tutorials.map(function(e){
    let words = e.split(" ");
    return words.map(function(f){
      return capitalize(f);
    }).join(" ");
  })
}

function capitalize(word){
  return word.charAt(0).toUpperCase() + word.substr(1);
}

function titledCased(){
  return tutorials.map(function(e){
    let words = e.split(" ");
    return words.map(function(f){
      return capitalize(f);
    }).join(" ");
  })
}

const words = tutorials[0].split(" ");

