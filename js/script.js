let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function nameValidation() {
    var name = document.getElementById("name-input").value;
    if (name.length == 0) {
        nameError.innerHTML = "name is required"
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name"
        return false;
    }

    nameError.innerHTML = `<i class="fa fa-check-circle"></i>`;
    return true;
}

function phoneValidation() {
    var phone = document.getElementById("phone-input").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "phone is required";
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = "phone must be 11 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = "Only digits";
        return false;
    }
    phoneError.innerHTML = `<i class="fa fa-check-circle"></i>`;
    return true;
}


function emailValidation() {
    var email = document.getElementById("email-input").value;
    if (email.length == 0) {
        emailError.innerHTML = "email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "email invalid";
        return false;
    }
    emailError.innerHTML = `<i class="fa fa-check-circle"></i>`;
    return true;
}

function messageValidation() {
    var message = document.getElementById("message-input").value;
    var required = 30;
    var left = required - message.length;
    if (!message.match(/^[A-Za-z0-9!\s\._\-]*$/)) {
        messageError.innerHTML = "Invalid special characters";
        return false;
    }
    if (left > 0) {
        messageError.innerHTML = left + "more characters required"
        return false;
    }
    messageError.innerHTML = `<i class="fa fa-check-circle"></i>`;
    return true;
}

function formValidation() {
    if (!nameValidation() || !phoneValidation() || !emailValidation() || !messageValidation()) {
        submitError.style.display = "block";
        submitError.innerHTML = "please fix Errors to submit";
        setTimeout(function() { submitError.style.display = "none"; }, 3000);
        return false;

    }

}

/^[A-Za-z0-9@\.]{1-100}$/