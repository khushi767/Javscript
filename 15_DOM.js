//window vs document
//window: window is the main container or we can say the global object and any operations related to entire browser window can be a part of window object.
////Document: whereas DOM is child of window object
//Window: represents the browser window containing a Document and other related objects. It provides a way to access and


//window:all the members like objects,methods or properties.if they are the part of window object then we do not refer the window object.
//DOM: whereas in DOM we need to refer the documnet, if we want to use the document object,method or properties.

//window has methods,properties and object. example setTimeout() or setInterval() are the methods,where as Document is the object of the window and it also has a screen object with properties describing the physical display.
//Document is just the object of the global object that is window,which deals with the document,the HTML elements themselves.


//DOM:Browser object model  $0












//DOM VS BOM
//DOM is Document object model,which deals with the document,the HTML elemenst themselves, eg document and all traversal you would do in it,events,etc.
//for eg: change the background color to red
//document.body.style.background="red";

//The BOM is Browser Object Model,which deals with browser components aside from the document,like history,location,navigator and screen(as well as some other that vary by browser)
//Or In simple meaning all the window operations which comes under BOM are performed using BOM


//                     Window
 //               /      |      \
 //       DOM           BOM         JAVASCRIPT
 //      Document       Navigator    Object
 //                     Screen       Array
 //                     Location     Function
 //                     Frames
 //                     History
 //                     XML Http Request

 //functinos alert/confirm/prompt are also a part of BOM, they are not related to the document , but represent pure browser methods of communicating with the user
 //alert(location.href); //shows current url
 if(confirm("want to visit thapaTechnical?")){
    location.href="https://www/youtube.com";
 }