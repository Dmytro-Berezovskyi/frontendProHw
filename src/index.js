const cardNumber = document.querySelector("#c-number");
const fullName = document.querySelector('#c-holder');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvv = document.querySelector('#cvv');

const errNumber = document.querySelector('#err-number');
const errName = document.querySelector('#err-name');
const errDate = document.querySelector('#err-date');
const errCvv = document.querySelector('#err-cvv');

const fullNameInCard = document.querySelector('#fullName');
const monthInCard = document.querySelector('#monthCard');
const yearInCard = document.querySelector('#yearCard');
const numberFirst = document.querySelector("#c-number-first");
const numberSecond = document.querySelector("#c-number-second");
const numberThird = document.querySelector("#c-number-third");
const numberFourth = document.querySelector("#c-number-fourth");

const userCardInfo = {};

//Function
function validateForm () {
    let isValid = true;

    if (!userCardInfo.cardNumber.trim() || userCardInfo.cardNumber.length !== 19) {
        errNumber.innerHTML = "Введіть номер карти з 16-ти цифр";
        cardNumber.classList.add('is-invalid');
        errNumber.classList.add('active');
        isValid = false;
    }
    if (!userCardInfo.fullName.trim()) {
        fullName.classList.add('is-invalid');
        errName.innerHTML = "Введіть імʼя та прізвище";
        errName.classList.add('active');
        isValid = false;
    } else if (Number(userCardInfo.fullName)) {
        fullName.classList.add('is-invalid');
        errName.innerHTML = "Введіть валідне імʼя та прізвище";
        errName.classList.add('active');
        isValid = false;
    }
    if (!userCardInfo.month || !userCardInfo.year) {
        errDate.innerHTML = "Введіть термін дії карти";
        month.classList.add('is-invalid');
        year.classList.add('is-invalid');
        errDate.classList.add('active');
        isValid = false;
    }
    if (!userCardInfo.cvv.trim() || userCardInfo.cvv.length !== 3 || !Number(userCardInfo.cvv)) {
        cvv.classList.add('is-invalid');
        errCvv.innerHTML = `Введіть CVV <br> з 3-х цифр`;
        errCvv.classList.add('active');
        isValid = false;
    }

    return isValid;
}

function clearErrors () {
    errNumber.innerHTML = "";
    errNumber.classList.remove('active');
    cardNumber.classList.remove('is-invalid');
    errName.innerHTML = "";
    errName.classList.remove('active');
    fullName.classList.remove('is-invalid');
    errDate.innerHTML = "";
    errDate.classList.remove('active');
    month.classList.remove('is-invalid');
    year.classList.remove('is-invalid');
    errCvv.innerHTML = "";
    errCvv.classList.remove('active');
    cvv.classList.remove('is-invalid');
}

function clearInput () {
    if (validateForm()) {
        cardNumber.value = "";
        fullName.value = "";
        month.value = "month";
        year.value = "year";
        cvv.value = "";
    }
}

function clearDateInCard () {
    if (validateForm()) {
        numberFirst.textContent = "2132";
        numberSecond.textContent = "****";
        numberThird.textContent = "****";
        numberFourth.textContent = "****";
        fullNameInCard.textContent = "Full name";
        monthInCard.textContent = "mm";
        yearInCard.textContent = "yy";
    }
}

//Main
cardNumber.addEventListener('input', () => {
    let cardNumberValue = cardNumber.value.replace(/\s/g, '');
    cardNumberValue = cardNumberValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    cardNumber.value = cardNumberValue;

    numberFirst.textContent = cardNumber.value.slice(0, 4);
    numberSecond.textContent = cardNumber.value.slice(5, 9);
    numberThird.textContent = cardNumber.value.slice(9, 14);
    numberFourth.textContent = cardNumber.value.slice(14, 19);

    if (cardNumberValue.length > 19) {
        cardNumber.value = cardNumber.value.slice(0, 19);
    }
    if (/[a-zA-Zа-яА-ЯіІїЇєЄ]/.test(cardNumberValue)) {
        cardNumber.value = '';
    }
    if (cardNumber.value.length === 0) {
        numberFirst.textContent = "2132";
        numberSecond.textContent = "****";
        numberThird.textContent = "****";
        numberFourth.textContent = "****";
    }
});

fullName.addEventListener('input', () => {
    fullNameInCard.textContent = fullName.value;
});

month.addEventListener('input', () => {
    switch (month.value) {
        case 'january': monthInCard.textContent = '01'; break;
        case 'february': monthInCard.textContent = '02'; break;
        case 'march': monthInCard.textContent = '03'; break;
        case 'april': monthInCard.textContent = '04'; break;
        case 'may': monthInCard.textContent = '05'; break;
        case 'june': monthInCard.textContent = '06'; break;
        case 'july': monthInCard.textContent = '07'; break;
        case 'august': monthInCard.textContent = '08'; break;
        case 'september': monthInCard.textContent = '09'; break;
        case 'october': monthInCard.textContent = '10'; break;
        case 'november': monthInCard.textContent = '11'; break;
        case 'december': monthInCard.textContent = '12'; break;
        default: monthInCard.textContent = 'mm';
    }
});

year.addEventListener('input', () => {
    yearInCard.textContent = year.value;
})

document.querySelector('#formCard').addEventListener('submit', (e) => {
    e.preventDefault();

    clearErrors();

    userCardInfo.cardNumber = cardNumber.value;
    userCardInfo.fullName = fullName.value;
    if (month.value !== 'month') {
        userCardInfo.month = month.value;
    }
    if (year.value !== 'year') {
        userCardInfo.year = year.value;
    }
    userCardInfo.cvv = cvv.value;

    clearInput();
    clearDateInCard();
    if (validateForm()) {
        console.log(`Card data: ${JSON.stringify(userCardInfo)}`);
    };
});