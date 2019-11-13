let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

document.getElementById('btnSignUp').addEventListener('click', (event) => postData());

function postData(){
    fetch('http://localhost:8080/user/add',{
        method: 'POST',
        body: JSON.stringify({
            "username": username.value,
            "email": email.value,
            "password":password.value,
        }),

        headers: {"Content-Type": "application/json"}
    });
    window.alert('User Created Successfully!');
}