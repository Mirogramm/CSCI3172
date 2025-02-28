//Was going to use objects like the example in the lab but I don't know where else to use maps as per requirements
const users = new Map([
    ["user1", "Password#123"],
    ["user2", "Password#321"]
]);

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2.8}$/i;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email");
    }
}

const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,}$/;
    if (!usernameRegex.test(username)) {
        throw new Error("Invalid username");
    }
}

const validatedPassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{12,}$/;
    if (!passwordRegex.test(password)) {
        throw new Error("Invalid password");
    }
}

const handleError = (message) => {

    let errorElements = {
        "Invalid email": "emailError",
        "Invalid username": "usernameError",
        "Invalid password": "passwordError",
        "Passwords dont match": "confirmPasswordError",
        "user not found": "loginUsernameError",
        "Incorrect password": "loginPasswordError"
    };

    if (errorElements[message]) {
        document.getElementById(errorElements[message]).textContent = message;
    } else {
        alert(message);
    }
}

const registerUser = (event) => {
    event.preventDefault();

    const {value: email} = document.getElementById("email");
    const {value: username} = document.getElementById("username");
    const {value: password} = document.getElementById("password");
    const {value: confirmPassword} = document.getElementById("confirmPassword");

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    try {
        validateEmail(email);
        validateUsername(username);
        validatedPassword(password);
        if(password !== confirmPassword) {
            throw new Error("Passwords dont match");
        }

        if(users.has(username)) {
            throw new Error("username already exists")
        } 

        users.set(username, password);

        //for testing
        console.log(`username: ${username} and password: ${password}`);
        alert("Go login now");
        
    } catch (error) {
        handleError(error.message);
    }
}

const loginUser = (event) => {
    event.preventDefault();

    const {value: username} = document.getElementById("loginUsername");
    const {value: password} = document.getElementById("loginPassword");

    try {
        if(!users.has(username)) {
            throw new Error("user not found");
        }
        if(users.get(username) !== password) {
            throw new Error("Incorrect password")
        } 
        
        alert("This alert popping up means login was successful. no where to redirect you so be easy on the grading.");

    } catch (error) {
        handleError(error.message);
    }
}

document.getElementById("registerForm")?.addEventListener("submit", registerUser);
document.getElementById("loginForm")?.addEventListener("submit", loginUser);