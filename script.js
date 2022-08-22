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
    }

    input = prompt("what would you like to do?");
};

console.log("User Has Quit the App!");