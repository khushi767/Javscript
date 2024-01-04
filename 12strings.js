//length of string
let myName="khushi "
console.log(myName.length)

//using double quotes inside double quotes--use escape character backs;ash
let anysen="we are so called \"khushi\" from north"
console.log(anysen)

//finding a string inside string
const myBioData='i am thapa technical';
console.log(myBioData.indexOf("thapa"));
console.log(myBioData.lastIndexOf("t"))//checks from last of string

//search() method --searches a string for a specifies value and returns position of match
let sData=myBioData.search("thapa");
console.log(sData)

//extracting string parts
//there are three methods for extracting a part of a string
//1. slice(start,end)     2.substring(start,end)     3. substr(start,length)

//slice() extracts a part of a string and returns the extracted part in a new string
//substring() takes 2 paameters :the start position and the end position
var str="apple,banana,kiwi";
let res=str.slice(0,4);
console.log(res)
let ress=str.slice(7,-2);//-2 ==endof string-2
console.log(ress);

//display only 280 characters of a string like in string
let myTweets="lorem Ipsum hjfnmsdgbeu w udikeue dhje dguiw gduw gdwk dwi dh w ow  ey ei hd w oq dhd i ue gdy ls  dje id  dh wo qo dgt gx78q ko dg";
let myactualTweet=myTweets.slice(0,15)
console.log(myactualTweet)
console.log(myactualTweet.length)


//substring methdod()--it does not accept negative indexes,otherwise it is similar to slice
let reso=str.substring(4,-2);
console.log(reso)


//substr() method--similar to slice ; but second parameter specifies the length of extracted part
let resu=str.substr(0,5);
//let resu=str.substr(-7)
console.log(resu)

//Replacing string content
//string.prototype.replace(searchFor,replaceWith)
//the replace() method replaces a specified value with another value in a string
let myFavColor="I love color red.";
let replaceData=myFavColor.replace('red','green');
console.log(replaceData)
//IMP: the replace() method does not change the string it is called on. It returns a new string.
//by default, the replace() method replaces only the first match


//extracting string characters: there are three methods
//1. charAt(position)   2. charCodeAt(position)   3. property access[]

//charAt() method returns the character at a specified index(position) in a string
let stra="HELLO WORLD";
console.log(stra.charAt(0));
console.log(stra.charAt(9));


//2. The charCodeAt() method returns the unicode of the character at a specified index in a string;
//The method returns a UTF-16 code--an integer between 0 and 65535

console.log(stra.charCodeAt(0))

//Return the unicode of the last character in a string
let stf="HELLO WORLD";
let lastChar=stf.length-1;
console.log(lastChar);
console.log(stf.charCodeAt(lastChar));

//property access -- ECMAScript5 allows property access[] on strings
var sti="HELLLO WORLD";
console.log(sti[0]);

//uppercase to lowercase methods
let myNamee="vinod tHApa";
console.log(myNamee.toLowerCase());
console.log(myNamee.toUpperCase());

//the concat() method--concat() joins two or more strings
let fName="khushi"
let lName="kumari"
console.log(fName+lName);
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));
console.log(`${fName}  is ${lName}`);

//string.trim() -- the trim() method removes whitespace from both sides of a string but not from center of a string
var Stpor="       Hello World!           ";
console.log(Stpor.trim());

//converting a string to an array -- a string can be converted to an array with the split() method
var txt="a,  b,c|d,e";  //string
console.log(txt.split(","));         //split on commas
console.log(txt.split(" "));         //split on spaces
console.log(txt.split("|"));        //split on pipe
