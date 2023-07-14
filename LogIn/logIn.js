// Array to store user data
let users = [];

// Function to retrieve user data from local storage
function getUsersFromLocalStorage() {
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  return storedUsers ? storedUsers : [];
}

// Function to save user data to local storage
function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Function to empty user data from local storage
function clearUserData() {
  users = []; // Empty the users array
  saveUsersToLocalStorage(); // Update local storage
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  const matchedUser = users.find(user => user.email === email && user.password === password);

  if (matchedUser) {
    alert('Login successful!');
    // Redirect to another page after successful login
    window.location.href = '../welcome/welcome.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullNameInput').value;
  const email = document.getElementById('signupEmailInput').value;
  const password = document.getElementById('signupPasswordInput').value;

  const newUser = {
    fullName: fullName,
    email: email,
    password: password
  };

  users.push(newUser);
  saveUsersToLocalStorage();

  alert('Sign up successful!');
});

// Retrieve user data from local storage on page load
users = getUsersFromLocalStorage();
console.log(users);
