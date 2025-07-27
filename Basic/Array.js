let array=[1,2,3,4,5]
console.log(array);
// functions
array.push(6);
console.log(array);

////// Slice and Splice 

let a1=array;
console.log(a1.slice(1,3));
console.log(a1.slice(0,3));
console.log(a1.slice(-6,3));
console.log(a1.slice(-6,0));
let a2=array;
console.log(a2.splice(-6,3));
console.log(a2);



