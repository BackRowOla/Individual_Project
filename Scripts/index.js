let username = document.getElementById('username');
let password = document.getElementById('password');

document.getElementById('btnSignIn').addEventListener('click', (event) => validateInput());

function validateInput() {
    console.log(username.value);
    // trying to validate users
    if (username.value == "") {
        console.log("about to append alert")
        username.appendChild(createAlert('alert alert-primary'));
    } else {
        findUser()
    }
}

function findUser() {
    fetch('http://localhost:8080/user/findUser/' + username.value)
        .then(res => res.json())
        .then(json => validateUser(json))
        .catch(err => console.error(err));
    console.log('show something');
}

function validateUser(data) {
    let d = data[0];
    sessionStorage.setItem('userId', d.id);
    if (d == undefined) {
        alert('Invalid username or password');
    } else {
        if (d.username === username.value && d.password === password.value) {
            let userId = sessionStorage.getItem('userId');
            alert("Successfully logged in!");
            window.location.href = "./home.html";
        }
    }
}

function createAlert(alertType, content) {
    let myEl = document.createElement('div');
    myEl.classname = alertType;
    myEl.setAttribute('role', 'alert');
}