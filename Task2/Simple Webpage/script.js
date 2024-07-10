document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const signupMessage = document.getElementById('signupMessage');
    const loginMessage = document.getElementById('loginMessage');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('signupUsername').value;
            const password = document.getElementById('signupPassword').value;
            if (localStorage.getItem(username)) {
                signupMessage.textContent = 'Username already exists!';
            } else {
                localStorage.setItem(username, password);
                signupMessage.textContent = 'Signup successful!';
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const storedPassword = localStorage.getItem(username);
            if (storedPassword === password) {
                loginMessage.textContent = 'Login successful!';
            } else {
                loginMessage.textContent = 'Invalid username or password!';
            }
        });
    }
});
