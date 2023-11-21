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

function resetPassword() {
    const phoneOrEmail = document.getElementById('usernameSignup').value;
    const password = document.getElementById('passwordSignup').value;

    if (localStorage.getItem(phoneOrEmail)) {
        const userJSON = localStorage.getItem(phoneOrEmail);
        const JSONtoUser = JSON.parse(userJSON);

        checkPassword(JSONtoUser.userName, JSONtoUser.phoneOrEmail, password);
    } else {
        alertMSG("There is no such user, sign up first!", "danger")
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
            resetUserPassword(userName, userPhoneOrEmail, userPassword);
            document.getElementById('usernameSignup').value = "";
            document.getElementById('passwordCheckSignup').value = "";
            document.getElementById('passwordSignup').value = "";
            alertMSG("Your password has been successfully reseted!", "success")
        }
    } else {
        alertMSG("Error: Invalid password", "danger")
    }
}

function resetUserPassword(userName, userPhoneOrEmail,  userPassword) {
    const user = new User(userPhoneOrEmail,userPassword, userName);

    const userToJSON = JSON.stringify(user);

    localStorage.setItem(userPhoneOrEmail, userToJSON);
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