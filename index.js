document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user123" && password === "password123") {
        window.location.href = "jeel.html"; 
    } else {
        alert("Incorrect username or password! Please try again.");
    }
});
