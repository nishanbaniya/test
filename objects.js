// const person={
//     name:"Nishan",
//     surName:"Baniya",
//     address:"Hoklabari",
//     phone:9800000000,
// }

// console.log(person.phone);         //calling/ accessing object using dot notation
// console.log(person["address"]);    //accesing object using bracket notation

// person.job="Student";              //assigning object i.e. adding properties in objects

// console.log(person["job"]);

// //OR
// person["country"]="Nepal"          //assigning objects

// console.log(person.country);

//Object Within function
// const introducer=(names, shirt) =>{
//     const myObj={
//         names: names,
//         shirt:shirt,
//         assests:100000,
//         liabilities:20000
//     }
//     const intro= `Hi, i am ${myObj.names} and my shirt colour is ${myObj.shirt} and my networth is $${myObj.assests - myObj.liabilities}`
//     return  intro;
//     //  OR directly: return `Hi, i am ${myObj.names} and my shirt colour is ${myObj.shirt} `
// }
// console.log(introducer("Nishan","white"));

const introducer=(names, shirt) =>{
    const myObj={
        names: names,
        shirt:shirt,
        assets:100000,
        liabilities:20000,
        netWorth: function() {
           return this.assets - this.liabilities
        }
    }
    const intro= `Hi, i am ${myObj.names} and my shirt colour is ${myObj.shirt} and my networth is $${myObj.netWorth()}`
    return  intro;
}
    
console.log(introducer("Nishan","white"));