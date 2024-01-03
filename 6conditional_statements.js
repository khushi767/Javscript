//control statements\
//if else

var tomm='sunny';
if(tomm=='rain'){
    console.log('take a raincoat')
}
else{
    console.log('no need to take a raincoat')
}

//check if a year is a leap year or not
var year=2020
if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("the year "+year+"is a leap year")
        }
        else{
            console.log("The year "+year+ " is not a leap year");
        }
    }else{
        console.log("The year "+year+ " is a leap year");
    }
}
else{
    console.log("The year "+year+ " is not a leap year");
}

//we have total 5 falsy values in javascript: 0,"",null,NaN,false{
 
var age=17;
if(age>=18){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote")
}

//same using ternary operator
console.log(age>=18?"you can vote":"you cannot vote")


//if else if
var area="rectangle";
var PI=3.14, l=5, b=4, r=3;
if(area=="circle"){
    console.log("the area of circle is: "+ PI*r**2);

}
else if(area=="triangle"){
    console.log("the area of triangle is:" +(l*b)/2)
}
else if(area=="rectangle"){
    console.log("the area of rectangle is "+ (l*b))
}
else{
    console.log("please enter valid data")
}


//switch statement
switch(area){
case 'triangle':
    console.log("the area of triangle is:" +(l*b)/2)
    break;
   case 'rectangle' :
   console.log("the area of rectangle is "+ (l*b));
   break;
   case 'circle':
    console.log("the area of circle is: "+ PI*r**2);
default:
    console.log("please enter valid data")
}
