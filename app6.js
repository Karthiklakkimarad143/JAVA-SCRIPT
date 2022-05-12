// Array methods in java script

// 1. push method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

let res=a.push("raju","rani");
console.log(a);
console.log(res);


// 2. unshift method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

let res=a.unshift("leela","sheela");

console.log(a);
console.log(res);


// 3. pop method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

let res=a.pop();

console.log(a);
console.log(res);


// 4. shift method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

let res=a.shift()

console.log(a);
console.log(res);


// 5. splice method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

let res=a.splice(2,4,"leela","laila");
console.log(a);
console.log(res);

let res=a.splice(4,6,"raju");
console.log(a);
console.log(res);

let res=a.splice(3,0,"rani");
console.log(a);
console.log(res);

let res=a.splice(3,2);
console.log(a);
console.log(res);


// 6. slice method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

console.log(a.slice(2,7));
console.log(a.slice(4,9));
console.log(a.slice(6));
console.log(a.slice(3,5));


// negative index

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

console.log(a.slice(-7,-2));
console.log(a.slice(-6,7));
console.log(a.slice(-2,-7));
console.log(a.slice(2,-2));
console.log(a.slice(-5,2));


// 7. indexof method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

console.log(a.indexOf("Qsp",4));
console.log(a.indexOf("jsp",6));
console.log(a.indexOf("jsp",4));
console.log(a.indexOf("jsp"));
console.log(a.indexOf("dinga"));
console.log(a.indexOf("sheela",4));


//  8. last indexof method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

console.log(a.lastIndexOf("Qsp"));
console.log(a.lastIndexOf("jsp"));
console.log(a.lastIndexOf("sheela"));


//  9. revers method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

console.log(a.reverse());
console.log(a);


//  10. join method

let a=[22,"jsp","Qsp","pap","java","jsp","html","jsp","Qsp","psp"];

console.log(a);
console.log(a,length);

console.log(a.join());
console.log(a.join("|"));
console.log(a.join("-->"));
console.log(a.join(""));
console.log(a.join(" "));




