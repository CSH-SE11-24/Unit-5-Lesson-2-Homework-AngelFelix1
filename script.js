// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storeName = "CSH Store"
console.log("Welcome to "+ storeName) 

// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 
let object ={
username: "angel",
password: "bro221",
status:"online"
}



// Task 3: Console log "[username] is [status]".
console.log(object.username + " is " + object.status)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess
let upasswordGuess = prompt("enter your password")



// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"

if (upasswordGuess === object.password)
  console.log("welcome " + object.username)
while(upasswordGuess !== object.password)
console.log("wrong answer try again")

// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 

let hoodieInventory ={
name:"hoodie",
quantity: 6,
price: "$99.99"
  
}


// Task 7: Console log "[name] costs [price]"
console.log(hoodieInventory.name + " costs " + hoodieInventory.price)

console.log
// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!
hoodieInventory.quantity = 5
console.log(hoodieInventory.quantity + " " + hoodieInventory.name + " left in inventory")


// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

