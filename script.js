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
    } else if (input === "new") {
        //4. Add new items to the ToDo list by Push:
        const newToDo = prompt("What would you like to add to the list?");
        todos.push(newToDo);
        console.log(`${newToDo} is added to the list!`);

    } else if (input === "delete") {
        //5. Delete items on the ToDo list and to see if it is an item on the list that can be deleted:
        const index = parseInt(prompt("Enter an index to delete!"));
        if (!Number.isNaN(index)) {
            const deletedIndex = todos.splice(index, 1);
            console.log(`User has deleted ${deletedIndex[0]} from the list!`);
        } else {
            console.log("Unknown Index");
        }

    }

    input = prompt("what would you like to do?");
};

console.log("User Has Quit the App!");