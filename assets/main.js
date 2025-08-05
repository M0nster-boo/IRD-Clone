function submitForm(event, formName) {
    event.preventDefault();
    alert(formName + " submitted successfully (offline simulation).");
    return false;
}

document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
        loginForm.addEventListener('submit', function(e){
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            if(user === 'user' && pass === '1234'){
                document.getElementById('loginMessage').innerText = "Login successful!";
            } else {
                document.getElementById('loginMessage').innerText = "Invalid credentials.";
            }
        });
    }
});
