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
  return tutorials.map(tutorial => {
    let array = [];
    tutorial.split(" ").forEach( word => {
      array.push(word.charAt(0).toUpperCase() + word.slice(1))
    })
    return(array.join(" "))
  })
}






//

let students = ["harry", "ron", "hermione", "ginevra"];

// let rollCall = [];
// for (const student of students) {
//   rollCall.push(student + " the wizard");
// }

// function studentRollCall(student){
//   return student + " the wizard"
// }
// let rollCall = students.map(studentRollCall);

let rollCall = students.map(student =>{
  return student + " the wizard"
})
// console.log(rollCall)

///
