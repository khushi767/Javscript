//math object allows to perform mathematical tasks on numbers
console.log(Math.PI);


//Math.round()//returns the value of x rounded to its nearest integer
//console.log(Math.round())

let num=10.286283;
console.log(Math.round(num))

//Math.pow()--Math.pow(x,y) returns the valu eof x to the power of y
console.log(Math.pow(2,3));
console.log(2**3)

//square root of a number --Math.sqrt()
console.log(Math.sqrt(25));
console.log(Math.sqrt(8));

//Math.abs() --- return absolute value of x
console.log(Math.abs(-9));
console.log(Math.abs(4-6))

//Math.ceil()-- returns value of x rounded up tp its nearest integer
//ik number jada deta
console.log(Math.ceil(4.51))
console.log(Math.round(4.51));
console.log(Math.ceil(99.1));

//math.floor()-- return value rounded down to nearest value
console.log(Math.floor(4.99));
console.log(Math.floor(4.1));

//Math.min() and Math.max()--returns minimum and max number
console.log(Math.min(0,150,23,43,25,-6));
console.log(Math.max(100,99,283,39,2019));

//Math.random() --returns a random number between 0 and 1
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10));

//Math.trunc() -- it returns the integer part of a number
console.log(Math.trunc(4.5));
console.log(Math.trunc(-99.76))
//if argument is a positive number, Math.trunc() is equivalent to Math.floor(),otherwise Math.trunc() is equivalent to Math.ceil()
