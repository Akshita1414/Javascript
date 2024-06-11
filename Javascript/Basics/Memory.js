// stack memory(Primitive) and heap memory(non primitive)
let myName = "AkshitaChauhan"

let anotherName = myName
anotherName = "Akshuuu"

console.log(myName) //AkshitaChauhan
console.log(anotherName)//Akshuuu
//ismei original value m change ni hoga uski 1 copy create hogi toh usmei change hoga

//object
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne //ye directly original vle ko refer krega stack m
userTwo.email = "akshitachauhan126@gmail.com"

console.log(userOne.email) //akshitachauhan126@gmail.com
console.log(userTwo.email) //akshitachauhan126@gmail.com
