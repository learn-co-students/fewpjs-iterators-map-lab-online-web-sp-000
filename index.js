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

// const titleCased = () => tutorials.map(function(string){
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }); 
   
// const titleCased = () => {
//   return tutorials.map(word => word.charAt(0).toUpperCase() + word.slice(1));
   
// };

const titleCased = (tutorials) => {
  return tutorials.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

// titleCased("I'm a little tea pot");

