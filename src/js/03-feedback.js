import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

initialForm();

form.addEventListener('input', throttle(onInput, 500));

function onInput() {
  const formData = new FormData(form);
  let userForm = {};
  formData.forEach((value, name) => (userForm[name] = value));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userForm));
}

function initialForm() {
  let persistedForm = localStorage.getItem(STORAGE_KEY);
  if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
    console.log(persistedForm);
    Object.entries(persistedForm).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

form.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  let userForm = {};
  const formData = new FormData(form);
  formData.forEach((value, name) => (userForm[name] = value));
  console.log(userForm);
  form.reset();
}
