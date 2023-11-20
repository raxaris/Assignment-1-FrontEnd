class User{
    userName;
    phoneOrEmail;
    password;
    constructor(POE, passwd, userName) {
        this.userName = userName;
        this.phoneOrEmail = POE;
        this.password = passwd;
    }
}

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
}) 

function signUpUser() {
    const userName = document.getElementById('nameSignup').value;
    const userPhoneOrEmail = document.getElementById('usernameSignup').value;
    const userPassword = document.getElementById('passwordSignup').value;

    if (validateEmail()) {
        checkPassword(userName, userPhoneOrEmail, userPassword);
    }
}

function validateEmail() {
    var email = document.getElementById("usernameSignup");

    var validRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*[@][a-zA-Z0-9]*[\.][a-z]{2,4}$/;

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert" style="width: 400px;">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder.append(wrapper)
    }

    setTimeout(function() {
        bootstrap.Alert.getOrCreateInstance(document.querySelector(".alert")).close();
    }, 1500)

    if(!email.value.match(validRegEx)) {
        appendAlert("Error: Invalid Email", "danger");
        return false;
    } else {
        email.value = "";
        return true;
    }
}

function checkPassword(userName, userPhoneOrEmail ,userPassword) {
    const userPasswordCheck = document.getElementById('passwordCheckSignup').value;

    const passwordPattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(userPassword.match(passwordPattern)) {
        if(userPasswordCheck != userPassword) {
            alertMSG("Error: Passwords are different", "danger");
            return false;
        } else {
            if(localStorage.getItem(userPhoneOrEmail) === null) {
                createUser(userName, userPhoneOrEmail, userPassword);
                document.getElementById('nameSignup').value = "";
                document.getElementById('usernameSignup').value = "";
                document.getElementById('passwordSignup').value = "";
                alertMSG("You have successfully signed up!", "success")
            } else {
                alertMSG("Error: User already exists!", "danger");
            }
        }
    } else {
        alertMSG("Error: Invalid password", "danger")
    }
}

function createUser(userName, userPhoneOrEmail,  userPassword) {
    const user = new User(userPhoneOrEmail,userPassword, userName);

    const userToJSON = JSON.stringify(user);

    localStorage.setItem(userPhoneOrEmail, userToJSON);
}

function getUser(key) {
    const userJSON = localStorage.getItem(key);
    
    const JSONToUser = JSON.parse(userJSON);

    console.log(JSONToUser);
}

function alertMSG(msg, alertType) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert" style="width: 400px;">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        alertPlaceholder.append(wrapper)
    }

    setTimeout(function() {
        bootstrap.Alert.getOrCreateInstance(document.querySelector(".alert")).close();
    }, 1500)

    appendAlert(msg, alertType);
}