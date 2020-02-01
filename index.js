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
  let tutorials2 = tutorials.map(function(sentence) {
  
  //split sentence into words. capitalize each word. join words into sentence.
  return sentence.split(" ").map(x => x = x.substring(0,1).toUpperCase() + x.substring(1)).join(" ");
  
});

  return tutorials2;
}

