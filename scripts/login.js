//Inputs
const emailInput = document.getElementById('formEmail');
const passwordInput = document.getElementById('formPassword');
//Error Handling
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

//Empty Error Handling
function validateEmail(){
    if (emailInput.value === ''){
    emailError.textContent = 'Please enter your email.'
    return false;
    }
}

function validatePassword(){
    if (passwordInput.value === ''){
    passwordError.textContent = 'Please enter your password.'
    return false;
    }
}

//Realtime validation
emailInput.addEventListener('click', validateEmail);
emailInput.addEventListener('blur', validateEmail);

passwordInput.addEventListener('click', validatePassword);
passwordInput.addEventListener('blur', validatePassword);


