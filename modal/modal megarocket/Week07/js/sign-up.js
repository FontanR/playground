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
// **********  NAME  ***********
var firstName = document.getElementById('name');
firstName.addEventListener('keyup', isName);
var savedName;

function isName(e) {
    var text = e.target.value;
    if (text != text.toLowerCase() && !hasInteger(text) && !hasSymbol(text) && text.length > 3) {
        savedName = text;
        firstName.onblur = function () {
            firstName.classList.remove('not-valid');
            firstName.classList.add('valid');
        }
    } else {
        var labelAlert;
        firstName.onblur = function () {
            firstName.classList.remove('valid');
            firstName.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have only letters and at least 3 digits');
            labelAlert.appendChild(textAlert);
            firstName.insertAdjacentElement('afterend', labelAlert);
        }
        firstName.onfocus = function () {
            firstName.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **********  LASTNAME  ************
var lastName = document.getElementById('last-name');
lastName.addEventListener('keyup', isLastName);
var savedLastName;

function isLastName(e) {
    var text = e.target.value;
    if (text != text.toLowerCase() && !hasInteger(text) && !hasSymbol(text) && text.length > 3) {
        savedLastName = text;
        lastName.onblur = function () {
            lastName.classList.remove('not-valid');
            lastName.classList.add('valid');
        }
    } else {
        var labelAlert;
        lastName.onblur = function () {
            lastName.classList.remove('valid');
            lastName.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have only letters and at least 3 digits');
            labelAlert.appendChild(textAlert);
            lastName.insertAdjacentElement('afterend', labelAlert);
        }
        lastName.onfocus = function () {
            lastName.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
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
            var textAlert = document.createTextNode('This input must be an email.');
            labelAlert.appendChild(textAlert);
            email.insertAdjacentElement('afterend', labelAlert);
        }
        email.onfocus = function () {
            email.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  BIRTH  ********************
var date = document.getElementById('birth');
date.addEventListener('change', isDate);
var savedDate;

function isDate() {
    var text = document.getElementById('birth').value;                             //  CAMBIO EN EL FORMATO DE   MM/DD/YYYY
    if (text.substring(0, 4) <= 2010) {
        var year = text.substring(0, 4);
        var month = text.substring(5, 7);
        var day = text.substring(8, 10);
        var date = [month, day, year];
        savedDate = date.join('/');
        date.onblur = function () {
            date.classList.remove('not-valid');
            date.classList.add('valid');
        }
    } else {
        var labelAlert;
        date.onblur = function () {
            date.classList.remove('valid');
            date.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('You must be at least 13 years old.');
            labelAlert.appendChild(textAlert);
            date.insertAdjacentElement('afterend', labelAlert);
        }
        date.onfocus = function () {
            date.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  DNI  ********************
var dni = document.getElementById('dni');
dni.addEventListener('keyup', isDNI);
var savedDni;

function isDNI(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && !hasSymbol(text) && text.length >= 7) {
        savedDni = text;
        dni.onblur = function () {
            dni.classList.remove('not-valid');
            dni.classList.add('valid');
        }
    } else {
        var labelAlert;
        dni.onblur = function () {
            dni.classList.remove('valid');
            dni.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 7 numbers.');
            labelAlert.appendChild(textAlert);
            dni.insertAdjacentElement('afterend', labelAlert);
        }
        dni.onfocus = function () {
            dni.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  PHONE  ********************
var phone = document.getElementById('phone');
phone.addEventListener('keyup', isPhone);
var savedPhone;

function isPhone(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && !hasSymbol(text) && text.length >= 10) {
        savedPhone = text;
        phone.onblur = function () {
            phone.classList.remove('not-valid');
            phone.classList.add('valid');
        }
    } else {
        var labelAlert;
        phone.onblur = function () {
            phone.classList.remove('valid');
            phone.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have 10 numbers.');
            labelAlert.appendChild(textAlert);
            phone.insertAdjacentElement('afterend', labelAlert);
        }
        phone.onfocus = function () {
            phone.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  ADRESS  ********************
var address = document.getElementById('address');
address.addEventListener('keyup', isAddress);
var savedAddress;

function isAddress(e) {
    var text = e.target.value;
    if (text.indexOf(' ') >= 3 && text.lastIndexOf(' ') <= text.length - 3 && text.toUpperCase() != text.toLowerCase() && hasInteger(text) && text.length >= 5) {
        savedAddress = text;
        address.onblur = function () {
            address.classList.remove('not-valid');
            address.classList.add('valid');
        }
    } else {
        var labelAlert;
        address.onblur = function () {
            address.classList.remove('valid');
            address.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 5 letters, 1 number and a blank space.');
            labelAlert.appendChild(textAlert);
            address.insertAdjacentElement('afterend', labelAlert);
        }
        address.onfocus = function () {
            address.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  CITY  ********************
var city = document.getElementById('city');
city.addEventListener('keyup', isCity);
var savedCity;

function isCity(e) {
    var text = e.target.value;
    if (text != text.toLowerCase() && !hasSymbol(text) && text.length > 3) {
        savedCity = text;
        city.onblur = function () {
            city.classList.remove('not-valid');
            city.classList.add('valid');
        }
    } else {
        var labelAlert;
        city.onblur = function () {
            city.classList.remove('valid');
            city.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 3 digits without symbols.');
            labelAlert.appendChild(textAlert);
            city.insertAdjacentElement('afterend', labelAlert);
        }
        city.onfocus = function () {
            city.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  ZIP CODE  ********************
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('keyup', isZipCode);
var savedZipCode;

function isZipCode(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && !hasSymbol(text) && text.length >= 4 && text.length <= 5) {
        savedZipCode = text;
        zipCode.onblur = function () {
            zipCode.classList.remove('not-valid');
            zipCode.classList.add('valid');
        }
    } else {
        var labelAlert;
        zipCode.onblur = function () {
            zipCode.classList.remove('valid');
            zipCode.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have between 4 and 5 numbers.');
            labelAlert.appendChild(textAlert);
            zipCode.insertAdjacentElement('afterend', labelAlert);
        }
        zipCode.onfocus = function () {
            zipCode.classList.remove('valid', 'not-valid');
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
            var textAlert = document.createTextNode('At least 8 characters with at least 1 upper case letter, 1 lower case, 1 number and 1 symbol.');
            labelAlert.appendChild(textAlert);
            password.insertAdjacentElement('afterend', labelAlert);
        }
        password.onfocus = function () {
            password.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  REPEAT PASS  ********************
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', isTheSamePassword);

function isTheSamePassword(e) {
    var textRepeatPassword = e.target.value;
    if (savedPassword == textRepeatPassword) {
        repeatPassword.onblur = function () {
            repeatPassword.classList.remove('not-valid');
            repeatPassword.classList.add('valid');
        }
    } else {
        var labelAlert;
        repeatPassword.onblur = function () {
            repeatPassword.classList.remove('valid');
            repeatPassword.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be exactly as the password input.');
            labelAlert.appendChild(textAlert);
            repeatPassword.insertAdjacentElement('afterend', labelAlert);
        }
        repeatPassword.onfocus = function () {
            repeatPassword.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
// **************  REGISTER BUTTON  ********************
var registerBtn = document.getElementById('button');
registerBtn.addEventListener('click', validateSubmit);
var local = localStorage;

function validateSubmit() {
    // if (email.classList.contains('not-valid') || password.classList.contains('not-valid') || firstName.classList.contains('not-valid') ||
    //     lastName.classList.contains('not-valid') || dni.classList.contains('not-valid') || date.classList.contains('not-valid') ||
    //     phone.classList.contains('not-valid') || zipCode.classList.contains('not-valid') || address.classList.contains('not-valid') ||
    //     city.classList.contains('not-valid') || repeatPassword.classList.contains('not-valid')) {
    //     alert('There are some inputs with incorrect information.');
    // } else {
    var url = 'https://api-rest-server.vercel.app/signup?name=' + savedName + '&lastName=' + savedLastName + '&dni=' +
        savedDni + '&dob=' + savedDate + '&phone=' + savedPhone + '&address=' + savedAddress + '&city=' + savedCity + '&zip=' + savedZipCode +
        '&email=' + savedEmail + '&password=' + savedPassword;

    fetch(url)
        .then(function (response) {                                                     //     password: BaSProfessional1
            return response.json();
        })
        .then(function (data) {
            if (data.hasOwnProperty('data')) {
                // localStorage.setItem('hasLocalStorage', 'true');
                var keys = Object.keys(data.data);
                for (var i = 1; i < keys.length; i++) {
                    var key = keys[i];
                    if (data.data.hasOwnProperty(key)) {
                        var value = data.data[key];
                        localStorage.setItem(key, value);
                        var modalElement = document.createElement('span');
                        modalElement.className = 'class-' + [i];
                        var modalText = document.createTextNode(key + ': ' + value);
                        modalElement.appendChild(modalText);
                        var modalBody = document.getElementById('modalBody');
                        modalBody.insertAdjacentElement('beforeend', modalElement);
                    }
                }
            } else if (data.hasOwnProperty('errors')) {
                for (var i = 0; i < data.errors.length; i++) {
                    var error = data.errors[i];
                    if (error.hasOwnProperty('msg')) {
                        var modalElement = document.createElement('span');
                        var modalText = document.createTextNode(error.msg);
                        modalElement.appendChild(modalText);
                        var modalBody = document.getElementById('modalBody');
                        modalBody.insertAdjacentElement('beforeend', modalElement);
                    }
                }
            }
        })
        .catch(function () {
            var modalElement = document.createElement('span');
            var modalText = document.createTextNode('ERROR: cant reach route');
            modalElement.appendChild(modalText);
            var modalBody = document.getElementById('modalBody');
            modalBody.insertAdjacentElement('beforeend', modalElement);
        });
}
// }

document.addEventListener("DOMContentLoaded", reloadValues);

function reloadValues() {
    // if (local.getItem('hasLocalStorage') == 'true') {
    firstName.value = local.getItem('name');
    savedName = local.getItem('name');

    lastName.value = local.getItem('lastName');
    savedLastName = local.getItem('lastName');

    address.value = local.getItem('address');
    savedAddress = local.getItem('address');

    zipCode.value = local.getItem('zip');
    savedZipCode = local.getItem('zip');

    date.value = local.getItem('dob');
    savedDate = local.getItem('dob');

    phone.value = local.getItem('phone');
    savedPhone = local.getItem('phone');

    dni.value = local.getItem('dni');
    savedDni = local.getItem('dni');

    city.value = local.getItem('city');
    savedCity = local.getItem('city');

    email.value = local.getItem('email');
    savedEmail = local.getItem('email');

    password.value = local.getItem('password');
    repeatPassword.value = local.getItem('password');
    savedPassword = local.getItem('password');
}
// }