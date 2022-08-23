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
        //5. Delete items on the ToDo list.... 
        const index = parseInt(prompt("Enter an index to delete!"));
        //by verifying the correct index to be removed. If not a valid index then run this:
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

//Notes:
// 1. Created user Input and Quit function using &&and quit/q
// 2. Make an empty storage array todos.
// 3. Allow Listing of the stored items in the array by accessing their index and using a for loop
// 4. Adding of new items in the todos array by "new" => used array."push"
// 5. Deletion of items in the array by accessing the index and using array."splice" method.
// 6. Added verification of valid indices to allow proper deletion. Using if statement and input is NOT EQUAL to a Number.