const form = document.querySelector('#form');
console.log(form);
const userInfo = {};

function validateForm() {
    let isValid = true;

    if (!userInfo.name) {
        document.querySelector('#errName').innerHTML = "Імʼя - це обовʼязкове поле";
    };

    return isValid;
};

function clearErr() {
    document.querySelector('#errName').innerHTML = "";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

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