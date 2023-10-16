function validateEmail() {
    var email = document.getElementById("emailID");

    console.log("asdasd")

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
        return true;
    }
}

