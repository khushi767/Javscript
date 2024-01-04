//Dom date methods(get and set)  time methods(get and set)
//Java script data objects represent a single moment in time in a platform independent format. Date objects contain a number that represents milliseconds since 1jan 1970 UTC.
//creating Date Objects
//There are 4 ways to create a new date object:

//1.new Date()
//2.new Date(year,month,day,hours,minutes,seconds,milliseconds)
//3.new Date(milliseconds)
//4.new Date(date string)

//Date objects are created with the new Date() constructor.
let currDate=new Date();
console.log(currDate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());

console.log(Date.now()) //returns milliseconds since january 1970

//defining own date- atleast there should be two arguments month is necessary
var d=new Date(2021,0,2,3,2,30,9);
console.log(d.toLocaleString());

var d=new Date("October 13, 2021 11:13:00");
console.log(d.toLocaleString());

//new Date(milliseconds) creates a new date object as zero time plus milliseconds
var dd= new Date(19384893528392);
console.log(dd.toLocaleString());


//DATES METHODS
const curDate=new Date();
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());

//date set
console.log(currDate.setFullYear(2027));
console.log(currDate.setFullYear(2027,10,5));
let setmonth=curDate.setMonth(10);
console.log(setmonth);
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());

//TIME METHODS       --get
const curTime= new Date();
console.log(curTime.getTime());
console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

//time set
let currTime=new Date();
//console.log(currTime.setTime());
console.log(currTime.setHours(17));
console.log(currTime.setMinutes(34));
console.log(currTime.setSeconds(23));
console.log(curTime.setMilliseconds(15));

//practice time
var c=new Date().toLocaleTimeString();
console.log(c);
var w=new Date().toLocaleDateString();
console.log(w);

var t=new Date().toLocaleString();
console.log(t)
