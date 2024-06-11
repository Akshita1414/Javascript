const name = "Akshita"
const age = 19

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('akshita-chauhan-com') //yha ye object h with key value pairs

// console.log(gameName[0]);
// console.log(gameName.__proto__); // hmare pass jiten bhi prototypes aaynge browser m hm vo saare access kr skte h 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-19, 4)
console.log(`another string is ${anotherString}`);

const newStringOne = "   akshita   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));