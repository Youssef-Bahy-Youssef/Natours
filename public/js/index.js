/* eslint-disable */

// import '@babel/polyfill';

// we use ( core-js regenerator-runtime ) rather than @babel/polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { login } from './login';
import { logout } from './logout';
import { updateData, updatePassword } from './updateSettings';

const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.btn--logout');
// const dataForm = document.querySelector('.form-user-data');
const passwordForm = document.querySelector('.form-user-password');
const passwordBtn = document.querySelector(
  '.form-user-password .btn--user--password'
);

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    login(email, password);
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    logout();
  });
}

// if (dataForm) {
//   dataForm.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('good till here');
//     const email = document.getElementById('email').value;
//     const name = document.getElementById('name').value;
//     updateData(email, name);
//   });
// }

if (passwordForm) {
  passwordForm.addEventListener('submit', async e => {
    passwordBtn.textContent = 'updating...';
    e.preventDefault();
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updatePassword(passwordCurrent, password, passwordConfirm);
    passwordBtn.textContent = 'save password';
  });
}
