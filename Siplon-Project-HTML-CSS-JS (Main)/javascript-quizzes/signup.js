// Username Validation
function validationFirst() {
    let firstInput = document.getElementById("first_input").value;
    let firstError = document.getElementById("first_error");
    if (firstInput.length != 0) {
        firstError.textContent = '';
        return true;
    } else {
        firstError.textContent = ' Username is required !';
        return false;
    }
}

// Email Validation
function validationEmail() {
    let email = document.getElementById("email_input");
    let emailError = document.getElementById("email_error")
    if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.textContent = 'Please Enter a valid email address!';
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

// Password Validation
let createField = document.getElementById("create-password");
let createError = document.getElementById("create_error");

function validationCreate() {
    if (!createField.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,}$/)) {
        createError.textContent = "Please enter at least 8 characters with a number, symbol, small and capital letter!";
        return false;
    } else {
        createError.innerHTML = "";
        return true;
    }
}

// Password Match Validation
function checkPassword() {
    let password = document.getElementById("create-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorCheck = document.getElementById("confirm_error");

    if (password.length != 0) {
        if (password === confirmPassword) {
            errorCheck.innerHTML = "";
            return true;
        } else {
            errorCheck.textContent = "Passwords don't match!";
            return false;
        }
    } else {
        errorCheck.textContent = "Password is required!";
        return false;
    }
}

// Local storage
function addData() {
    var emailUser = document.getElementById("email_input").value;
    var passwordUser = document.getElementById("create-password").value;
    localStorage.setItem('userEmail', emailUser);
    localStorage.setItem('userPass', passwordUser);
}

// Redirect to login page
function loginPage() {
    window.location.href = "login.html";
}

// Event listener
var signBottom = document.getElementById("button");

signBottom.addEventListener("click", function (event) {
    event.preventDefault();

    var isUsernameValid = validationFirst();
    var isEmailValid = validationEmail();
    var isPasswordValid = validationCreate() && checkPassword();

    if (isUsernameValid && isEmailValid && isPasswordValid) {
        addData();
        loginPage();
    }
});
