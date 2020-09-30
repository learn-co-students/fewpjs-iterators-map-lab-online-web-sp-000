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


const titleCased = () => tutorials.map(function(tutorial){
  var stringArray = tutorial.split(' ')
  var arr = []
  var alphas = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(' ') 
  for(var el of stringArray){
    if (alphas.includes(el[0])){
      tutorial = tutorial.replace(el, function(word){ return word[0].toUpperCase().concat(word.slice(1))})
    }
  }
  return tutorial
})

