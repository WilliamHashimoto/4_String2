//#1
let phrase = 'Bonjour tout le monde    '
//#2
console.log(phrase.length);
//#3
phrase = phrase.trim();
//#4
console.log(phrase.length);
//#5
console.log(phrase.charAt(phrase.length-1));
//#6
phrase = phrase.replace("Bonjour", "");
console.log(phrase);
//#7 
phrase = "Bonjour ".concat(phrase);
console.log(phrase);
//#8
phrase = phrase.substring(0,7);
console.log(phrase);
//#9
phrase = phrase.replace("Bonjour", "String");
console.log(phrase);
//#10
let Number = Math.random();
console.log(Number);