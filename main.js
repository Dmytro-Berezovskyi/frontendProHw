const form = document.querySelector('#form');
console.log(form);
const userInfo = {};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    userInfo.name = form.querySelector('#name').value;
    userInfo.email = form.querySelector('#email').value;
    userInfo.phone = form.querySelector('#phone').value;
    userInfo.message = form.querySelector('#message').value;

    console.log("User Date:", userInfo);
});