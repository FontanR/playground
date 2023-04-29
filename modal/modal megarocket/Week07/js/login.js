// **************  VALIDATE NUMBERS  ********************
function hasInteger(string) {
    var array = [];
    for (var i = 0; i < string.length; i++) {
        array.push(parseInt(string[i]));
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 1 == 0) {
            return true;
        }
    }
}
// **************  VALIDATE SYMBOLS  ********************
function hasSymbol(string) {
    var symbols = '!@#$%^&*()_+=-?/.,<>`~';
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < symbols.length; j++) {
            if (string[i] == symbols[j]) {
                return true;
            }
        }
    }
    return false;
}
// **************  EMAIL  ********************
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);
var savedEmail;

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    if (result) {
        savedEmail = text;
        email.onblur = function () {
            email.classList.remove('not-valid');
            email.classList.add('valid');
        }
    } else {
        var labelAlert;
        email.onblur = function () {
            email.classList.remove('valid');
            email.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('The email is incorrect.');
            labelAlert.appendChild(textAlert);
            var form = document.getElementById('form');
            form.insertAdjacentElement('afterend', labelAlert);
        }
        email.onfocus = function () {
            email.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  PASS  ********************
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);
var savedPassword;

function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.indexOf(' ') == -1 /*&& hasSymbol(textPassword)*/ && textPassword != textPassword.toLowerCase() &&
        textPassword != textPassword.toUpperCase() && hasInteger(textPassword) && textPassword.length >= 8) {
        savedPassword = textPassword;
        password.onblur = function () {
            password.classList.remove('not-valid');
            password.classList.add('valid');
        }
    } else {
        var labelAlert;
        password.onblur = function () {
            password.classList.remove('valid');
            password.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('The password is incorrect');
            labelAlert.appendChild(textAlert);
            var form = document.getElementById('form');
            form.insertAdjacentElement('afterend', labelAlert);
        }
        password.onfocus = function () {
            password.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  LOGIN BUTTON  ********************
var loginBtn = document.getElementById('button');
loginBtn.addEventListener('click', validateSubmit);

function validateSubmit() {
    if (email.classList.contains('not-valid') || password.classList.contains('not-valid')) {
        alert('There are some inputs with incorrect information.');
    } else {
        var url = 'https://api-rest-server.vercel.app/login?email=' + savedEmail + '&password=' + savedPassword;      //     password: BaSProfessional1
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var modalElement = document.createElement('span');
                var modalText = document.createTextNode(data.msg);
                modalElement.appendChild(modalText);
                var modalBody = document.getElementById('modalBody');
                modalBody.insertAdjacentElement('beforeend', modalElement);
            })
            .catch(function () {
                var modalElement = document.createElement('span');
                var modalText = document.createTextNode('ERROR: cant reach route');
                modalElement.appendChild(modalText);
                var modalBody = document.getElementById('modalBody');
                modalBody.insertAdjacentElement('beforeend', modalElement);
            });
    }
}