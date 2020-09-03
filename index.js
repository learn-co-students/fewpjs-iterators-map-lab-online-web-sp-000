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
//   return tutorials.map( function(title) {
//     let splitTitle = title.split(" ");
//     splitTitle.forEach( function(word) {
//       let splitWord = word.split("");
//       splitWord[0].toUpperCase();
//     });
//   }
// )}

// const titleCased = () => {
//   let string = "";
//   let newArray = [];
//   tutorials.forEach( function(title) {
//     let wordsArray = title.split(" ");
//     wordsArray.forEach( function(word) {
//       let letters = word.split("");
//       let capLetter = letters[0].toUpperCase();
//       let splitWord = letters.splice(1);
//       let fullWord = capLetter + splitWord.join("");
//       string += fullWord + " ";
//     })
//     newArray.push(string)
//   })
//   console.log(newArray);
// }
const titleCased = () => {
  let array = [];
  tutorials.forEach(function(title) {
    let splitTitle = title.split(" ");
    let i = 0;
    let fullWord;
    while (i < splitTitle.length) {
      let word = splitTitle[i].split("");
      let firstLetter = word[0].toUpperCase();
      let restOfWord = word.slice(1);
      fullWord = (firstLetter + restOfWord.join(""));
      splitTitle.splice(i, 1, fullWord);
      i++
    }
    array.push(splitTitle.join(" "));
  });
  return array;
}

