document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
}) 

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

function logIn() {
    const phoneOrEmail = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;


    
    if(phoneOrEmail == "Admin") {
        if(password == "Admin") {
            window.location.href = "adminPage.html";
        } else {
            alertMSG("Wrong password or userName!", "danger")
        }
    }

    if (localStorage.getItem(phoneOrEmail)) {
        const userJSON = localStorage.getItem(phoneOrEmail);
        const JSONtoUser = JSON.parse(userJSON);

        if(JSONtoUser.password == password) {
            alertMSG("Wellcome " + JSONtoUser.userName + ", You have succesfully logged in", "success")
            document.getElementById('usernameLogin').value = '';
            document.getElementById('passwordLogin').value = '';
        } else {
            alertMSG("Wrong password or userName!", "danger")
        }
    } else {
        alertMSG("There is no such user, sign up first!", "danger")
    }
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