function sum(){
    var a=10,b=40;
    var total=a+b;
    console.log(total)
}
sum()

//difference between function paramater and function argument;
function sum(a,b)     //function parameter
{
    var total=a+b;
    console.log(total)
}

sum()//not a paramater
sum(20,30)//function argument
sum(1,3)

//function is used for code reusability,we can run for different arguments


//function expression :create a functiono and put it into the variable
function sum(c,d){
    var totaal=c+d;
    console.log(totaal);
}
var funExp=sum(5,15)

//return keyword
//when javascript reaches a return statement,the function will stop executing.

function sum(m,n){
    return total=m+n;
}
var funExp=sum(90,19);
console.log('the sum of two numbers is '+funExp);


//Anonymous function:  function without name is called anonymous function
var funExp=function(x,y){
    return total=x+y;       //this expression is called anonymous function expression and overall is called anonymous function
}
var sum=funExp(15,15)
var sum1=funExp(15,16)
console.log('the sum of two no is '+sum);