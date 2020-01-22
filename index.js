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
  return tutorials.map(
    function(string){ 
      let arrayOfWords = string.split(' ');
      let narrayOfWords = [];
      for(let i = 0; i < arrayOfWords.length; i++){
        narrayOfWords.push(arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].substr(1));       
      }
      return narrayOfWords.join(' ');
    }
  )
  //return tutorials
  //return newTutorials
}
