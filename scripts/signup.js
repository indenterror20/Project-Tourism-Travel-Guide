//inputs
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
//error handling
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPassError = document.getElementById('confirmPassError');

function validateUsername(){
    if (username.value === ''){
        usernameError.textContent = 'Please enter a username.';
        return false;
    }
}

function validateEmail(){
    if (email.value === ''){
        emailError.textContent = 'Please enter a email.';
        return false;
    }
}

function validatePass(){
    if (password.value === ''){
        passwordError.textContent = 'Please enter a password.';
        return false;
    }
}

function confirmPass(){
    if (confirmPassword.value === ''){
        confirmPassError.textContent = 'Please confirm your password.';
    } else if (confirmPassword.value !== password.value){
        confirmPassError.textContent = 'Passwords do not match.';
    } else {
        confirmPassError.textContent = ''; //clears error when password match
    }
}

//realtime error handling
username.addEventListener('click', validateUsername);
username.addEventListener('blur', validateUsername);

email.addEventListener('click', validateEmail);
email.addEventListener('blur', validateEmail);

password.addEventListener('click', validatePass);
password.addEventListener('blur', validatePass);

confirmPassword.addEventListener('click', confirmPass);
confirmPassword.addEventListener('blur', confirmPass);


//===============================USER SIGN-IN================================================