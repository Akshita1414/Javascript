const user = {
    username: "Akshita",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this keyword hm lgate h current context kp refer krne k liye
        console.log(this);
    }

}

user.welcomeMessage() //Akshita, welcome to website
user.username = "sam"
user.welcomeMessage() // sam, welcome to website

console.log(this); // node environment k abdr this is empty and browser k andr this window ko refer krta h

function chai(){
    let username = "hitesh" // function k andr this ki bht saari values milti h
    console.log(this.username); // it will be undefined as functions k andr this kaam nhi krta
}

chai()

const chai = function () {
    let username = "hitesh"
    console.log(this.username);
 }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit calling return likhen ki jrurt nhi

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()