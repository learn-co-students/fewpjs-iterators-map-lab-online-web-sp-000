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
  
  return tutorials.map( title => { 
    
    return title.split(" ").map( word => {
      
      let charArray = word.split('');
      charArray[0] = charArray[0].toUpperCase();
      return charArray.join('');

    }).join(" ")
  })
}