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

const tbody = document.querySelector('.listOfUsers');

window.addEventListener('load', () =>{
    showAll();
})

function generateLine(key) {
    const userBlock = document.createElement("tr");
    userBlock.classList.add("users");

    const userJSON = localStorage.getItem(key);
    const JSONToUser = JSON.parse(userJSON);

    const userName = JSONToUser.phoneOrEmail + "UserName";
    const phoneOrEmail = JSONToUser.phoneOrEmail + "PhoneOrEmail";
    const password = JSONToUser.phoneOrEmail + "Password";

    userBlock.innerHTML = `
        <td><input type="text" class="form-control" id="${userName}" value="${JSONToUser.userName}"></td>
        <td><input type="text" class="form-control" id="${phoneOrEmail}" value="${JSONToUser.phoneOrEmail}"></td>
        <td><input type="text" class="form-control" id="${password}" value="${JSONToUser.password}"></td>
        <td>
            <button class="btn loginButton text-white px-3 me-3" 
            onclick="saveUser('${userName}', '${phoneOrEmail}', '${password}')">Save</button>
            <button class="btn btn-danger" onclick="deleteUser('${JSONToUser.phoneOrEmail}')">Delete</button>
        </td>
    `;

    tbody.appendChild(userBlock);
}


function showAll() {
    Object.keys(localStorage).forEach(function(key){
        if(!(key == "cart")) {
            generateLine(key);
        }
    });
}

function clearAll() {
    const users = document.querySelectorAll(".users");

    users.forEach(user => {
        user.remove();
    })
}

function saveUser(userNameId, phoneOrEmailId, passwordId) {
    const userName = document.getElementById(userNameId).value;
    const userPhoneOrEmail = document.getElementById(phoneOrEmailId).value;
    const userPassword = document.getElementById(passwordId).value;
    const user = new User(userPhoneOrEmail,userPassword, userName);

    const userToJSON = JSON.stringify(user);

    localStorage.setItem(userPhoneOrEmail, userToJSON);
    clearAll();
    showAll();
}

function deleteUser(key) {
    localStorage.removeItem(key);
    clearAll();
    showAll();
}

function search() {
    clearAll();
    const id = document.getElementById('userId').value;
    if (id == "") {
        showAll();
    }
    Object.keys(localStorage).forEach(function(key){
        if(!(key == "cart")) {
            if (key == id) {
                generateLine(key);
            }
        }
    });
}