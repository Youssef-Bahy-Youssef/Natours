/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

export const updateData = async (email, name) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
      data: {
        email,
        name
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Data updated successfully');
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert('error', err.response.data.message);
  }
};

export const updatePassword = async (
  passwordCurrent,
  password,
  passwordConfirm
) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:3000/api/v1/users/updateMyPassword',
      data: {
        passwordCurrent,
        password,
        passwordConfirm
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Password updated successfully');
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert('error', err.response.data.message);
  }
};
