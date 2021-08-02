// import React from 'react';
import { toast } from 'react-toastify';

export const TOAST_DEFAULT_OPTIONS = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 10000,
};

//! Message validations
export const messages = {
  success: 'data sent successfully',
  error: '08 characters or more are required',
  empty: 'the field cannot be empty',
};

export function renderSuccessMsg(msg) {
  toast.success(msg, messages.success, TOAST_DEFAULT_OPTIONS);
}

export function renderErrorMsg(msg) {
  toast.error(msg, messages.error);
}

export function renderEmptyMsg(msg) {
  toast.warn(msg, messages.empty);
}

// isempty = 'string is not empty and does not contain spaces'
// notisempty = 'string is empty or contains only spaces';

// passwordnotisValid = 'password is invalid'
// passwordisValid = 'password is valid';

// emailnotisValid = 'email is invalid'
// emailisValid = 'email is valid';

// phonenotisValid = 'phone is invalid'
// phoneisValid = 'phone is valid';
