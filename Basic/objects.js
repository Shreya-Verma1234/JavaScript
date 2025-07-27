/*let marks=Symbol("mark")// always define symbol 
let obj={
    name:"Shreya",
    age:21,
   [marks]:89
};
console.log(obj[marks]);// this is how object of symbol called
console.log(typeof(obj.name));
console.log(typeof(obj.age))
*/
let obj2={
    fullName:{
        userName:"Shreya",
        lastName:"Verma"
    }
}
// console.log(obj2.fullName);
// console.log(obj2.fullName.userName);

//Accessing array elements using objects
let user=[
    {
        id:1,
        name:"Ashu"
    }, 
    {
        age:21
    }
]
// console.log(user[0].id);
// console.log(user);

// console.log(Object.values(user));
let {age}=user
console.log(age);






