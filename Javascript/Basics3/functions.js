
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    console.log("Akshita") // ye print nhi hoga kyuki function m return k baad kuch bhi print nhi hota
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // jb mujeh ye nhi pta ki kitni no of arguments aane vli h then we use rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // output: 500, 2000 kyuki 200 and 400 dono val1, val2 m chli gyi and baaki saari num1

const user = {
    username: "hitesh",
    prices: 199
}

// pasing objecta s the argument
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));