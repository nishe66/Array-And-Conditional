// Problem-1-Manage a Todo List
let todoList = ["Do laundry", "Pay bills", "Walk the dog"];
// step-1 :
todoList.push("Buy groceries");
console.log(todoList);
// step-2 :
todoList.unshift("Clean room");
console.log(todoList);
// step-3 :
todoList.pop();
console.log(todoList);
let addList = "Buy groceries";
console.log(addList);
// step-4 :
let result = todoList.indexOf("Clean room");
console.log(result);
todoList.shift();
console.log(todoList);
// step-5 :
console.log(todoList.length);



// Step-1-answer:
// [ 'Do laundry', 'Pay bills', 'Walk the dog', 'Buy groceries' ]

// Step-2-answer:
// [
//   'Clean room',
//   'Do laundry',
//   'Pay bills',
//   'Walk the dog',
//   'Buy groceries'
// ]

// Step-3-answer: 
// remove last task:
// [ 'Clean room', 'Do laundry', 'Pay bills', 'Walk the dog' ]
// store it in a variable
// Buy groceries

// Step-4-answer:
// 0
// [ 'Do laundry', 'Pay bills', 'Walk the dog' ]

// Step-5-answer:
// 3