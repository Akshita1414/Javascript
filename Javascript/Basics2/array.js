// array

//Arrays can contain multiple data types also
//javascript array copy operations create shallow copies
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) // bilkul starting m first position pe 9 ko add krdega
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // changes array to string

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr); // original array : [0, 1, 2, 3, 4, 5]


const myn1 = myArr.slice(1, 3) 
console.log(myn1);  // after slicing [0, 1, 2]
console.log("B ", myArr); // original arrya remains same after slicing: [0, 1, 2, 3, 4, 5]


const myn2 = myArr.splice(1, 3) 
console.log("C ", myArr);  // after splicing [0, 1, 2, 3]
console.log(myn2);  //original array also changes after splicing: [0, 4, 5]



// Array - 2
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]); //answer will be flas marvel heroes will contain dc heroes as a 4th element

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // inn saare subarrays ko 1 hi krdiya
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) // to convert strings, objects, nodelist etc anything inrto array
console.log(Array.from({name: "hitesh"})) // interesting as it will retuen empty array...specify krna pdega ki key ka array bnye ya value ka

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // inn let variables ka array bna dega