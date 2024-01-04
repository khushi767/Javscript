//find square root of each element in an array
let arr=[25,36,49,64,81];
let arrSqr=arr.map((curElem)=>{
    //return curElem;
    return Math.sqrt(curElem)
})
console.log(arrSqr);

//multiply each element by 2 and retunr only those elemnts whose sum is greater than 10
//chaining method

let arr2=[2,3,4,6,8];
let array=arr2.map((currrElm)=>{
    return currrElm*2;
}).filter((currElem)=>{
    return currElem>10;
})
console.log(array)

//REDUCE MeTHOD
//flatten an array means to convert the 3d or 2d array into a single dimensional array
// The reduce() method executes a reducer function(that you provide) on each element of the array,resulting in single output value.
//The reducer function takes four arguments:
// accumulator, current value, current index, source array

var arra=[5,6,2];
let sum=arra.reduce((accumulator,curElem,index,arr)=>{
    return accumulator+=curElem;
})
console.log(sum)