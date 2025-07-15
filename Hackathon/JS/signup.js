const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});


loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', (e) => {

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('User already registered. Please log in.');
    } else {
        
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        container.classList.remove('active'); // Switch to login form
    }
});

const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert(`Login successful! Welcome, ${validUser.username}`);
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});