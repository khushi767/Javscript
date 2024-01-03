//javascript--->ECMAscript ----> ES6 --->

//  1. LET  VS  CONST   VS  VAR
//var =function scope we can use anywhere inside function
//let and const= block scope can be used in a statement/loop only outside the loop not accessible
var myName="thapa technical";
console.log(myName);

myName="vinod thapa";
console.log(myName);

let myNamee="thapa technicall";
console.log(myName);

myNamee="techa";
console.log(myNamee)

//const myValue="tech"
//console.log(myValue)      
//myValue="jks"               //will give error because we can not change value for constant decleartion
//console.log(myValue)



//2. TEMPLATE LITERALS
for(let num=1;num<=10;num++){
    let tableOf =12;
    console.log(`${tableOf}*${num}=${tableOf}`);
}


//3. Default Arguments--Default function parameters allow named parameters to be initialised with default values if no value or undefined is passed
function mult(a,b=5){
    return a*b;
}
console.log(mult(3));

//4. Destructuring
//5. object properties
//6. arrow fundtion -->fat arow functtion
const sum=()=>{
let g=5;h=6;
let sum=g+h;
return `the sum of two number is ${sum}`;
}
console.log(sum())

const summ=()=>`the sum of two number is ${(d=10)+(e=12)}`
console.log(summ())