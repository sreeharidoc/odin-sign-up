const mobileInput = document.getElementById("mobile");
const mobileError = document.getElementById("mobile-error");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password")
const passwordError = document.getElementById("password-error")

const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")

function validatePassword(passwordText){
    return passwordText === confirmPasswordInput.value;
}

function validateMobileNumber(mobileNumber) {
  const regex = /^[0-9]{10}$/;
  return regex.test(mobileNumber);
}

function validateEmail(emailText){
    const regex = /^[a-zA-Z0-9]+@gmail\.com$/;
    return regex.test(emailText)
}

function mobileInputCheck(){
    const mobileNumber = mobileInput.value;
    if(validateMobileNumber(mobileNumber)){
        mobileError.style.display = "none"
    }
    else{
        mobileError.style.display = "block"
    }
}

mobileInput.addEventListener("change",mobileInputCheck)

function emailCheck(){
    const emailText = emailInput.value
    if(validateEmail(emailText)){
        emailError.style.display = "none"
    }
    else{
        emailError.style.display = "block"
    }
}

emailInput.addEventListener("change",emailCheck)

const button = document.getElementById("button")


confirmPasswordInput.addEventListener("input",function(){
    const passwordValue = passwordInput.value;
    if (validatePassword(passwordValue)){
        passwordError.style.display = "none";
        button.disabled = false
    }
    else{
        passwordError.style.display = "block";
        button.disabled = true
    }
});




