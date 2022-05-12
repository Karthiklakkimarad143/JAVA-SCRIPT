// java script array

let z=[22,23,44,55,"jsp",true];

console.log(z);
console.log(z[0]);
console.log(z[1]);
console.log(z[2]);
console.log(z[3]);
console.log(z[4]);
console.log(z[5]);


let A=[22,"jsp","jspider",55,"Qsp","jsp", , ,"Qsp"];

console.log(A);
console.log(A[6]);
A[2]="Qsp";
console.log(A);


let a=[22,"jsp","dinga","sheela","leela","laila","kokila"];

console.log(a);
console.log(a, length);

console.log(a[0]);
console.log(a[5]);

a[4]="raju";
a[7]="jspider";
a[10]="qspider";
console.log(a);
console.log(a[8]);



// using for loop

let a=[22,"jsp","dinga","sheela","leela","laila","kokila"];

console.log(a);
console.log(a,length);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

for(let i=0; i<a.length; i++)
{
    console.log(i,a[i]);
}



// in java script= for of loop


let a=[22,"jsp","dinga","sheela","leela","laila","kokila"];

console.log(a);
console.log(a,length);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

for(let i of a)
{
    console.log((i));
}



//  for in loop

let a=[22,"jsp","dinga","sheela","leela","laila","kokila"];

console.log(a);
console.log(a,length);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

for(let i in a)
{
    console.log(i);
}