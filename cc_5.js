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
console.log(`Cart Items: ${cartItems}`);

// Task 4: Map Method
// Declare an array prices= [100, 200, 300]
let prices = [100, 200, 300];
// Use the .map() method to apply a 10% discount to each price
let discountedPrices = prices.map(price => `$${(price * 0.9).toFixed(2)}`);
// Log the new discounted prices to the console
console.log(`Discounted Prices: ${discountedPrices}`);

// Task 5: Filter Method
// Declare an array inventory with at least five product quantities
let inventory = [5, 0, 12, 8, 0];
// Use the .filter() method to remove products with zero stock
let filteredInventory = inventory.filter(quantity => quantity > 0);
// Log the filtered array to the console
console.log(`Inventory: ${filteredInventory}`);

// Task 6: Reduce Method
// Declare an array sales = [500, 300 200, 400]
let sales = [500, 300, 200, 400];
// Use the .reduce() method to calculate total revenue
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);
// Log the total revenue to the console
console.log(`Total revenue: $${totalRevenue}`);

// Task 7: find() Method
// Declare an array customers = [Alice, Bob, Charlie, David]
let customers = ["Alice", "Bob", "Charlie", "David"];
// Use the .find() method to locate the customer Charlie
let customerFound = customers.find(customer => customer === "Charlie");
// Log the result to the console
console.log(`Customer located: ${customerFound}`);