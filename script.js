//1. USER INPUT AND QUIT FUNCTION:
let input = prompt("what would you like to do?");

//2. CREATE AN ARRAY FOR STORAGE:
const todos = ["Go Grocery Shopping", "Fix the Car", "Buy pens", "Watch a Movie"];

while (input !== "quit" && input !== "q") {

    //3. MAKE A LIST INSIDE THE ARRAY
    if (input === "list") {
        console.log("************************");
        //list the arrays and its index using a for loop:
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("************************");
    //4. Add new items to the ToDo list by Push:
    } else if (input === "new") {
        const newToDo = prompt("What would you like to add to the list?");
        todos.push(newToDo);
        console.log(`${newToDo} is added to the list!`);
    }

    input = prompt("what would you like to do?");
};

console.log("User Has Quit the App!");