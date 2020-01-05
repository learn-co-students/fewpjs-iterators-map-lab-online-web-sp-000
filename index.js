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
  return tutorials.map((tutorial) => {
    let strings = tutorial.split(" "); //["what", "does"..]

    for(let i = 0; i < strings.length; i++){
      let caps = strings[i].charAt(0).toUpperCase() // "W"
      let lowercase = strings[i].slice(1) // grab "hat"
      let merge = caps.concat(lowercase) // concat "W" and "hat"
      strings[i] = merge // reassign the new capitalized "What" to its position in the sstring
      // ^ each loop is getting saved to strings, bc we defined it outside the loop
      // and are now reusing the vari
    }
    //at this point console.log(strings)  // [ 'What', 'Does', 'The', 'This'...] ['What', 'Is', 'The'...]
    // just a bunch of individual arrays
    return strings.join(" ") // here we remove sub arrays, and .map() returns just one biggggg array 
  })

}

//titleCased()
//console.log(titleCased())


//regex = /([A-Z])\w+/g
