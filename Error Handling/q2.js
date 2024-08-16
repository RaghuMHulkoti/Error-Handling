function login(username, password) {
    // Simulated valid credentials
    const validCredentials = {
        username: "user123",
        password: "securepassword"
    };

    if (!username) {
        throw new Error("Username is required.");
    }

    if (!password) {
        throw new Error("Password is required.");
    }

    if (username !== validCredentials.username || password !== validCredentials.password) {
        throw new Error("Invalid username or password.");
    }

    // Simulate successful login
    console.log("Login successful!");
}

// Example usage:
try {
    login("user123", "securepassword");
} catch (error) {
    console.error(error.message);
}
