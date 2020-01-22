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
  //map through tutorirals 
  return tutorials.map(function (tutorial) {
   //split strings in tutorial 
    tutorial = tutorial.split(' ');
    //iterate over the length of the tutorial array
    for (var i = 0; i < tutorial.length; i++) {
      //at tutotial index make the string to upper case
      //slice at the second index 
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    //return the strings joined 
    return tutorial.join(' ');
  });
}

// tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    