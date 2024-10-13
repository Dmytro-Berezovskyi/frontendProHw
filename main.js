document.querySelector('#container').addEventListener('click', (event) => {
    console.log(event.target.value);
    alert(`Клікнуто на кнопці: ${event.target.value}`);
})