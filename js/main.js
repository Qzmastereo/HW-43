let field1 = document.getElementById('field1');
let field2 = document.getElementById('field2');
let button = document.getElementById('result');

button.addEventListener('click', function () {
    if (field1.value !== "" && field2.value !== "") {
        alert('Обидва заповнені');
    } else {
        alert('Не всі заповнені');
    }
});

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let sum = document.getElementById('sum');

sum.addEventListener('click', function () {
    let value1 = Number(number1.value);
    let value2 = Number(number2.value);

    if (value1 + value2 > 10) {
        alert("Сума більша за 10");
    } else {
        alert("Сума менша або дорівнює 10");
    }
})
let field3 = document.getElementById('field3');
let check = document.getElementById('check');

check.addEventListener('click', function () {
    if (field3.value.includes("JavaScript")) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
})

let number3 = document.getElementById('number3');
let checks = document.getElementById('checks');

checks.addEventListener('click', function () {
    let value3 = Number(number3.value);

    if (value3 > 10 && value3 < 20) {
        alert("Число входить в діапазон від 10 до 20");
    } else {
        alert("Число не входить в діапазон від 10 до 20");
    }
})
let nameField = document.getElementById('name');
let emailField = document.getElementById('email');
let passwordField = document.getElementById('password');
let submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    let name = nameField.value
    let email = emailField.value
    let password = passwordField.value

    let NameValid = name.length >= 3;
    let EmailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
    let PasswordValid = password.length >= 6;

    if (NameValid && EmailValid && PasswordValid){
        alert("Вас перенаправлено");
    } else {
        alert("Помилка вас не перенаправлено");
    }
}
)
