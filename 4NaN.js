var myPhoneNumber=985530405476;
var myName="khus i"

console.log(isNaN(myPhoneNumber))   //gives false on number
console.log(isNaN(myName))   //not a number so true

if(isNaN(myName)){
    console.log("please enter a valid number")
}



//
NaN===NaN
console.log(NaN===NaN)

Number.NaN===NaN;
console.log(Number.NaN===NaN)

isNaN(NaN);
console.log(isNaN(NaN))     //is nan not a number yes so true

isNaN(Number.NaN);
console.log(isNaN(Number.NaN))    //true