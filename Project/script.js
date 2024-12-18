document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "havocvaiop" && password === "aaaa") {
        alert("Login Successful!");
        window.location.href = "main.html"; // Redirect to the main page
    } else {
        document.getElementById('error-msg').innerText = "Invalid username or password!";
    }
});