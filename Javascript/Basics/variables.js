const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//hm var issliye nhi use krte kyuki var has a function and let has a block sscope which makes it more secure to use

function foo(){
    if (true){
       let x = 5
       var y = 10
    }
    // here x can't be accessed while y is accessible
 }


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])