// Functions----------
// 1. Named function

function add(a,b)
{
    console.log(a);
    console.log(b);
    console.log(a+b);
}
add(2,3,);


function add(a,b)
{
    return a+b;
} 
console.log(add(2,3));
console.log(add(2,3)+4);
console.log(add(2,3)+5);

      //OR

let res=add(2,3);
console.log(res);
console.log(res+4);
console.log(res+5);


// //!------------------------------
// // var is a function scope keyword
var a=20;
function m2()
{
    var a="Dinga";
    console.log(a);
}
m2()
console.log(a);


// 2. Annonimous function
// a function which is declear without name is know as Annonimous function

let res=function()
{
    console.log("hello");
    return("Jspiders");
}
console.log(res);
console.log(res());


// 3. Arrow function

let res=function()
{
    return "Jspiders";
}
console.log((res()));


let res=()=>"jspiders";
console.log(res);
console.log(res());

// 4. call by function

function add(a,b)
{
    console.log(a+b);
    console.log(a);
    console.log(b);
}
add(2,4);

add(function m1()
{
  return 3;
},4)
console.log(m1());


// 5. IIFE function

function m1()
{
    let a="Dinga";
    console.log(a);
}
m1();
m1();
m1();
m1();


(function()
  {
     let a="Dinga";
     console.log(a);
} () );
