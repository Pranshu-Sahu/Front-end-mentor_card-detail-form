const form = document.getElementById('form');
const complete = document.getElementById('complete');
const fname = document.getElementById('name');
const number = document.getElementById('number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');
const card__name = document.getElementById('card__name');
const card__number = document.getElementById('card__number');
const card__month = document.getElementById('card__month');
const card__year = document.getElementById('card__year');
const card__cvc = document.getElementById('card__cvc');
const complete__btn = document.getElementById('complete__btn');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validForm = formValidation();
    if (validForm) {
        form.style.display = 'none';
        complete.style.display = 'block';
    }
})
complete__btn.addEventListener('click', () => {
    form.style.display = 'block';
    form.reset();
    complete.style.display = 'none';

})

function formValidation() {
    let validForm = true;
    const nameValue = fname.value;
    const numberValue = number.value;
    const monthValue = month.value;
    const yearValue = year.value;
    const cvcValue = cvc.value;
    if (nameValue == '') {
        setError(fname, `Can't be blank`);
        validForm = false;
    } else {
        setSuccess(fname);
    }
    if (numberValue == '' || numberValue.length != 16) {
        setError(number, 'Invalid Card Number');
        validForm = false;
    } else {
        setSuccess(number);
    }
    // error of expiry date
    if (monthValue == '') {
        validForm = false;
        setError(month, 'Cannot be empty');
    }
    if (yearValue == '') {
        validForm = false;
        setError(year, 'Cannot be empty');
    }
    if (monthValue != '' && yearValue != '') {
        setSuccess(month)
    }
    if (cvcValue == '' || cvcValue.length != 3) {
        setError(cvc, 'Invalid CVC');
    } else {
        setSuccess(cvc);
    }
    return validForm;
}

function setError(id, message) {
    let formControl;
    if (id.id == 'month' || id.id == 'year') {
        let elem = id.parentElement.parentElement;
        // id.parentElement.className = 'd-flex form-control';
        let error = elem.querySelector('.error');
        // display error message
        error.innerHTML = message;
        error.style.visibility = 'visible';
        //set border color of input
        id.style.borderColor = 'hsl(0, 100%, 66%)';

    } else {
        formControl = id.parentElement;
        const error = formControl.querySelector('.error');
        error.innerHTML = message;
        formControl.className = 'form-control wrong';
    }
}

function setSuccess(id) {
    if (id.id === 'month' || id.id === 'year') {
        let elem = id.parentElement.parentElement;
        // id.parentElement.className = 'd-flex form-control';
        let error = elem.querySelector('.error');
        // hide error message if any
        error.style.visibility = 'hidden';
        //set border color of input
        id.style.borderColor = 'rgb(118, 118, 118)';
    } else {
        const formControl = id.parentElement;
        formControl.className = 'form-control';
    }
}


fname.addEventListener('input', displayCard);
number.addEventListener('input', displayCard);
month.addEventListener('input', displayCard);
year.addEventListener('input', displayCard);
cvc.addEventListener('input', displayCard);

function displayCard() {
    card__name.innerHTML = fname.value;
    card__number.innerHTML = number.value;
    card__month.innerHTML = month.value;
    card__year.innerHTML = year.value;
    card__cvc.innerHTML = cvc.value;
}