function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name=="" || email=="" || pass=="" || confirm=="") {
        alert("All fields required");
        return false;
    }

    if (pass != confirm) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration Successful");
    return true;
}

function loginForm() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (email=="" || pass=="") {
        alert("Enter email & password");
        return false;
    }

    alert("Login Successful");
    return true;
}