function addToCart(product) {
    const { name, price, quantity } = product;

    if (!name) {
        throw new Error("Product name is required.");
    }

    if (typeof price !== 'number' || price <= 0) {
        throw new Error("Invalid product price.");
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }

    // Simulate adding product to cart
    console.log(`${quantity} of ${name} added to cart at $${price} each.`);
}

// Example usage:
try {
    addToCart({ name: "Laptop", price: 999.99, quantity: 1 });
} catch (error) {
    console.error(error.message);
}



function checkout(cart) {
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }

    // Simulate checkout process
    console.log("Proceeding to checkout with the following items:", cart);
}

// Example usage:
try {
    const cart = [
        { name: "Laptop", price: 999.99, quantity: 1 },
        { name: "Mouse", price: 49.99, quantity: 2 }
    ];
    checkout(cart);
} catch (error) {
    console.error(error.message);
}
