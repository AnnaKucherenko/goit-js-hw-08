import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
}

populateTextarea();

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const objectData = JSON.parse(savedData);
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    email.value = objectData.email;
    message.textContent = objectData.message;
    
  }
}


function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log(formData);
    document.querySelector('.feedback-form').reset();
    localStorage.removeItem(STORAGE_KEY);
}

