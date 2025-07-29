// Primitive (Call by value)

let name="shreya";
let nickName= name;
console.log(name);
console.log(nickName);
nickName="Ashu";
console.log(name);
console.log(nickName);

// Non-primitive (Call by reference)

let emp={
    name:"Ashu",
    id:1234,
    address:"JBros"
}
let emp2=emp;
emp2.name="Shreya";
console.log(emp.name);
console.log(emp2.name);
//2nd way to access from object
let{address}=emp;
console.log(address);






