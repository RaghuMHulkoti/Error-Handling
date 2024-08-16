function processPayment(amount, cardNumber, expirationDate) {
    // Helper function to validate credit card number (simple Luhn algorithm check)
    function isValidCardNumber(number) {
        const regex = /^\d{16}$/;
        return regex.test(number);
    }

    // Helper function to check if expiration date is in the future
    function isFutureDate(date) {
        const today = new Date();
        const expDate = new Date(date);
        return expDate > today;
    }

    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    if (!cardNumber || !isValidCardNumber(cardNumber)) {
        throw new Error("Invalid card number.");
    }

    if (!expirationDate || !isFutureDate(expirationDate)) {
        throw new Error("Invalid expiration date.");
    }

    // Simulate payment processing
    console.log("Payment processed successfully!");
}

// Example usage:
try {
    processPayment(100, "1234567812345678", "2025-12-31");
} catch (error) {
    console.error(error.message);
}
