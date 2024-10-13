document.querySelector('#container').addEventListener('click', (event) => {
    alert(`Клікнуто на кнопці: ${event.target.textContent}`);
});