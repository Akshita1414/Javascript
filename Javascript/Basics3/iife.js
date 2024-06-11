// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // these brackets and semicoolon is necessary

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Akshita')
