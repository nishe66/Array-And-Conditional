// problem-3:Modify an array color
let colors = ["Red", "Blue", "Green"];
// Step-1
colors.push("Yellow");
console.log(colors);
// Step-2
colors.shift();
console.log(colors);
// Step-3
colors.unshift("Purple");
console.log(colors);
// Step-4
 let result = colors.indexOf("Blue");
 console.log(result);
 colors.splice(1, 1);
 console.log(colors);

// Step-5
console.log(colors.length);


// Step-1-answer:
// [ 'Red', 'Blue', 'Green', 'Yellow' ]
// Step-2-answer:
// [ 'Blue', 'Green', 'Yellow' ]
// Step-3-answer:
// [ 'Purple', 'Blue', 'Green', 'Yellow' ]
// Step-4-answer:
// index-number
// 1
// remove array
// [ 'Purple', 'Green', 'Yellow' ]
// Step-5-answer:
// 3
