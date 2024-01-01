//expressionn is combinaton of operand and operand 

//operators in javascript,    assignment operator,,arithmetic operator,  comaprison operator,, logical operator,,string operator,,conditional(ternary )operator

//assignment operator
var x=5;
var y=5;
console.log("is both x and y are equal or not"+x==y);
console.log(`is both x and y are equal: ${x==y}`)

//arithmetic operator
console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*8)
console.log("Remainder operator"+27%4)
console.log(++x)
console.log(x++);
console.log(x)
console.log(y--);

//comparison operator
var a=8
var b=5
console.log(x==y)//f
console.log(a==b)//f
console.log(a!==b)//true
console.log(a>b)//true
console.log(a>=b)//true

//logical operator
console.log(a>b && b<0);//and operator
console.log(a>b ||b<0)//or operator
console.log(a>0 ||b<0)
console.log(!a>0)//logical not operator

//double quote ya single quote ke andr string......+ sign is called concatenation operator
//concatenation
var myName="vinod "
console.log(myName+" kumari")
console.log(myName+  "babbar")

console.log(3**3)//3 ka cube
console.log(9**2)//9 ka square            //exponentiation operator


//swap of two numbers without using third variable
var m=7
var n=9
m=m+n //m=16
n=m-n  //n=16-9
m=m-n
console.log("the value of m is"+m);
console.log("the value of n is"+n)