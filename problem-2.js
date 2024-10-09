// problem-2:Managing a guest

let guests = ["Alice", "Bob"];
// step-1
guests.push("John Doe", "Merk", "Stepen");
console.log(guests);
// step-2
guests.shift();
console.log(guests);
// step-3
guests.unshift("Tim Cook");
console.log(guests);
// step-4
let result = guests.indexOf("John Doe");
console.log(result);
// step-5
console.log(guests.length);


// Step-1-answer:
// [ 'Alice', 'Bob', 'John Doe', 'Merk', 'Stepen' ]
// // Step-2-answer:
// [ 'Bob', 'John Doe', 'Merk', 'Stepen' ]
// Step-3-answer:
// [ 'Tim Cook', 'Bob', 'John Doe', 'Merk', 'Stepen' ]
// Step-4-answer:
// 2
// Step-5-answer:
// 5