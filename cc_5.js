// Task 1: Object Properties
// Declare an object customer with name, age, and email
const customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
// Log each property using console.log and a template literal
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer email: ${customer.email}`);

// Task 2: Object Methods
// Declare an object order with properties orderID, totalAmount, and status
const order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",
    // Add a method displayOrder() inside the object to log the order details using this
    displayOrder: function() {
        console.log(`Order ID: ${this.orderID}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    }
};
// Call the method and log the details
order.displayOrder();

// Task 3: Array Manipulation (push, pop, shift, unshift)
// Declare an array cartItems with three product names
let cartItems = ["Eggs", "Butter", "Milk"];
// Add a new product to the cart using .push()
cartItems.push("Orange Juice");
// Remove the last item using .pop()
cartItems.pop();
// Add an item at the beginning using .unshift()
cartItems.unshift("Potatoes");
// Remove the first item using .shift()
cartItems.shift();
// Log the final array to the console
console.log(cartItems);