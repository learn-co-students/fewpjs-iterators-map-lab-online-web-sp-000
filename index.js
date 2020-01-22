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


// const titleCased = () => {tutorials.map(function(tutorial){
//   tutorial = tutorial.split(" ")
//   for(let i = 0; i < tutorial.length; i++){
//     let capped = tutorial[i].charAt(0).toUpperCase();
//     tutorial[i] = capped + tutorial[i].slice(1)
   
//   }
//    tutorial = tutorial.join(' ')
//   //  return tutorial
//   // debugger;
// })
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map(function(tutorial){
    tutorial = tutorial.split(" ")
    for(let i = 0; i < tutorial.length; i++){
      let capped = tutorial[i].charAt(0).toUpperCase();
      tutorial[i] = capped + tutorial[i].slice(1)

    }
    return  tutorial.join(' ')
})
}



// let capFirst = lesson[i].charAt(0).toUpperCase()
    // let capped = capFirst + lesson[i].slice(1)