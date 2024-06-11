// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Akshita",
    "full name": "Akshita Chauhan",
    [mySym]: "mykey1", // special case ymbol ko aise hi use kr skte h hm
    age: 18,
    location: "Patiala",
    email: "akshita@.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "akshita@chatgpt.com"
//  Object.freeze(JsUser) // agr hm chahte h ki hm iski value ko freeze na kr paye
JsUser.email = "akshita@microsoft.com"
console.log(JsUser);

//
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this se hm uss object ki saari properties ko access kr skte h
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Akshita