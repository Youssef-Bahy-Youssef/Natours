/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  // create XMLHttpRequest to /api/v1/users/login
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password
      }
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
    }
    window.setTimeout(() => {
      location.assign('/');
    }, 2000);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
