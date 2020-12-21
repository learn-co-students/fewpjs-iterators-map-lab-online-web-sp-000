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
  let capitalizedTutorials = tutorials.map(function(tutorial) {
    let tutorialString = tutorial.split(" ")
    
    // iterate over each string and capitalize
    for (let i = 0; i < tutorialString.length; i++) {
        tutorialString[i] = tutorialString[i].charAt(0).toUpperCase() + tutorialString[i].slice(1)
    }
    return tutorialString.join(" ")
  });
  return capitalizedTutorials
}





