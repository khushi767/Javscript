//arrays in javascript can store all types of datatypes in a single array
//first element=lower index/lower boundary
//last element=upper index/upper boundary

//traversal in an array-navigate through an array
var myFriends=['vinod','ramesh','arjun'];
console.log(myFriends[0]);
//if we want to check length of elements of an array
console.log(myFriends.length);
console.log(myFriends[myFriends.length-1])

//we use for loop to navigate
//for in loop, for of loop --es6/es2015
for(var i=0;i<myFriends.length;i++){
    console.log(myFriends[i]);
}

//for in loop--gives index number of an array
for(let elements in myFriends){
    console.log(elements);
}

for(let elemets of myFriends){
    console.log(elemets)
}

//for eachh loop..calls a function for each element of an array
myFriends.forEach(function(element,index,array){
    console.log(element+" index: "+index+ array)
})

//using fat arrow function
myFriends.forEach((element,index,array)=>{
    console.log(element+"index: "+index+" "+array)
})
//fat arrow function does not support this function

//SEARCHING AND filter IN AN ARRAY
//array.prototype.indexOf()
//returns the first (least)index of an element within the array equal to an element or -1 if none is found.it search the element from thw 0th index nuumber


//array.prototype.lastIndexOf()

//find method search with filtration


//create read update and delete(crud)
///push adds data at end
const animals=['pigs','goats'];
const count=animals.push('hen')
console.log(animals)
console.log(count)

//shift adds data at beginning
//array.prototype.unshift()
//unshift method()  adds one or more elements to the beginning of an array and returns the new lenght of array

const countt=animals.unshift('hens');
console.log(countt)
console.log(animals)


//pop-removes last element from an array and returns that element.this changes length of array
const plants=['bhalu','teddy'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

//array.prototpe.shift()--removes elements from starting
console.log(plants.shift());
console.log(plants);


//SPLICE METHOD
//adds and removes element from an array


const months=['jan','march','april','june','july'];
//addition of new month
const newMonth=months.splice(months.length,0,'dec');
console.log(months)

//checkking retuurn value of new month
console.log(newMonth)     //gives empty array because we havenot deleted anything

//update march to March
//const updateMonth=months.splice(1,1,'MARch');
//console.log(months)
const indexOfMonth=months.indexOf('june');
if(indexOfMonth!=-1){
    const updateMonth=months.splice(indexOfMonth,1,'JUNE');
    console.log(months);
}else{
    console.log('NO Such data found')
}


//delete june from an array
const indexxOfMonth=months.indexOf('june');
if(indexxOfMonth!=-1){
    const updateMonth=months.splice(indexxOfMonth,1);
    console.log(months);
    console.log(updateMonth);
}else{
    console.log('NO Such data found')
}


//map ,reduce,filter method
//array.prototype.map()
//let newarray=arr.map(callback(currentValue[,index[,array]]){
    //return element for newarray,after executing somwthing
//})
//returns a new array containing the results of calling a function on every element in this array
const array1=[1,4,9,16,25];
//num>9
let newarr=array1.map((curElem,index,arr)=>{
    return curElem>9;
})
console.log(array1);
console.log(newarr)


//map method retuen a new array containing the result of instruction

let newarrr=array1.map((curElm,index,arr)=>{
    return `index no=${index} and the value is ${curElm} belong to ${arr}`
})
console.log(newarrr);