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

// const titleCased = () => {
//   // return tutorials.map(e => e.charAt(0).toUpperCase() + e.substring(1));
//   // return tutorials.map(e => e.split(' ').charAt(0).toUpperCase().join(' '));
// }

// const titleCased = () => {
//    return tutorials.map(e => {
//       return e.replace(/\w\S*/g, function(txt){
//          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       });
//    });
// }

const titleCased = () => {
   return tutorials.map(tut => {
      tut = tut.split(' ');

      for (var i = 0; i < tut.length; i++) {
        tut[i] = tut[i].charAt(0).toUpperCase() + tut[i].slice(1);
      }

      return tut.join(' ');
   });

}
