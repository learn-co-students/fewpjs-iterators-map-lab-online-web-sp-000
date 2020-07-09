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
  function updateTitle(tutorial){ // function accepts arugment of a tutorial (ex. 'what does the this keyword mean?')
    let sentence = tutorial.split(' ') // we then split that string by word into an array (ex. ['what', 'does', 'the', 'this', 'keyword', 'mean?'])
    const cappedWords = sentence.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Using map, we select each element and modify it to set the first character of the word to upper case then add the rest of the word to it (ex. ['What', 'Does', 'The', 'This', 'Keyword', 'Mean?'])
    return cappedWords.join(' ')// Lastly, we use join to bring these elements together in the form of a string, separating each word with a space (ex. ['What Does The This Keyword Mean?'])
  }
  
  const newList = tutorials.map(tutorial => updateTitle(tutorial)) // We insert our function into a map statement that touches each element of our 'tutorials' array.
  return newList // Finally, return the array we saved with the var 'newList'
}