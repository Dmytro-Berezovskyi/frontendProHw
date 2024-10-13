document.querySelector('#container').addEventListener('click', (event) => {
    console.log(event.target);
    alert(`Клікнуто на кнопці: ${event.target}`);
})