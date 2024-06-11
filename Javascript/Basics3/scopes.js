//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}



console.log(a); // undefined
console.log(b); // undefined
console.log(c); // 30 issliye hm var use nhi krte


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error chota bde k variabels access kr skta h but bda chote k nhi rk skta(ice cream) or child parent k functions ko access kr skta h

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // no error

function addone(num){
    return num + 1
}



addTwo(5) // error
const addTwo = function(num){
    return num + 2
}