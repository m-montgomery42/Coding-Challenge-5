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