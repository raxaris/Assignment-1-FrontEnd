class User{
    phoneOrEmail;
    password;
    constructor(POE, passwd) {
        this.phoneOrEmail = POE;
        this.password = passwd;
    }
}

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
}) 

function signUpUser() {
    const userPhoneOrEmail = document.getElementById('usernameSignup').value;
    const userPassword = document.getElementById('passwordSignup').value;


    checkPassword(userPhoneOrEmail, userPassword);
}

function checkPassword(userPhoneOrEmail ,userPassword) {
    const userPasswordCheck = document.getElementById('passwordCheckSignup').value;

    const passwordPattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if(userPassword.match(passwordPattern)) {
        if(userPasswordCheck != userPassword) {
            alertMSG("Error: Passwords are different");
            return false;
        } else {
            if(localStorage.getItem(userPhoneOrEmail) === null) {
                createUser(userPhoneOrEmail, userPassword);
            } else {
                alertMSG("Error: User already exists!");
            }
        }
    } else {
        alertMSG("Error: Invalid password")
    }
}

function createUser(userPhoneOrEmail,  userPassword) {
    const user = new User(userPhoneOrEmail,userPassword);

    const userToJSON = JSON.stringify(user);

    localStorage.setItem(userPhoneOrEmail, userToJSON);
}

function getUser(key) {
    const userJSON = localStorage.getItem(key);
    
    const JSONToUser = JSON.parse(userJSON);

    console.log(JSONToUser);
}

function alertMSG(msg) {
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

    appendAlert(msg, "danger");
}