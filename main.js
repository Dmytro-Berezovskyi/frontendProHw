const body = document.querySelector('body');
const table = document.createElement('table');

table.classList.add('my_table');
body.appendChild(table);

for (let i = 0; i < 10; i++) {
    table.appendChild(document.createElement('tr'));
};

const trs = document.querySelectorAll('tr');

for (let i = 0; i < 11; i++) {
    trs.forEach(tr => tr.appendChild(document.createElement('td')));
};