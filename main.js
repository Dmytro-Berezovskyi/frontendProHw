const form = document.querySelector('#form');
const userInfo = {};
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^\+380[3-9][0-9]{8}$/;

function validateForm() {
    let isValid = true;

    if (!userInfo.name) {
        document.querySelector('#errName').innerHTML = "Імʼя - це обовʼязкове поле";
        isValid = false;
    };

    if (userInfo.message.length < 5) {
        document.querySelector('#errMessage').innerHTML = "Повідомлення має містити не менше 5 символів"
        isValid = false;
    };

    if (!emailRegex.test(userInfo.email)) {
        document.querySelector('#errEmail').innerHTML = "Email повинен містити @ та .";
        isValid = false;
    };

    if (!phoneRegex.test(userInfo.phone)) {
        document.querySelector('#errPhone').innerHTML = "Номер телефону має починатись з +380"
        isValid = false;
    };

    return isValid;
};

function clearErr() {
    document.querySelector('#errName').innerHTML = "";
    document.querySelector('#errMessage').innerHTML = "";
    document.querySelector('#errEmail').innerHTML = "";
    document.querySelector('#phone').innerHTML = "";
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErr();

    userInfo.name = form.querySelector('#name').value;
    userInfo.email = form.querySelector('#email').value;
    userInfo.phone = form.querySelector('#phone').value;
    userInfo.message = form.querySelector('#message').value;

    if (validateForm()) {
        console.log("User Date:", userInfo);
    } else {
        console.log("User date isn't valid!");
    }
});