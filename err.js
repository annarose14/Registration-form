const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const collegename = document.getElementById('collegename');
const email = document.getElementById('email');
const yearofpassing = document.getElementById('yearofpassing');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const collegenameValue = collegename.value.trim();
    const emailValue = email.value.trim();
    const yearofpassingValue = yearofpassing.value.trim();
    const phonenumberValue = phonenumber.value.trim();

    if (fullnameValue === '') {
        setError(fullname, 'name is required');
    } else {
        setSuccess(fullname);
    }
    if (collegenameValue === '') {
        setError(collegename, 'College name is required');

    } else {
        setSuccess(collegename);
    }
    if (emailValue === '') {
        setError(email, 'Email is required');

    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (yearofpassingValue === '') {
        setError(yearofpassing, 'Year of passing is required');
    } else if (yearofpassingValue.length < 5) {
        setError(password, 'Invalid year of passing.')
    } else {
        setSuccess(yearofpassing);
    }

    if (phonenumberValue === '') {
        setError(phonenumber, 'Please enter valid phone number');
    } else if (phonenumberValue.length < 11) {
        setError(phonenumber, "Phone number doesn't match");
    } else {
        setSuccess(phonenumber);
    }

};