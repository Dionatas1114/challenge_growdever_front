// import {messages} from './validationMessages';

const isEmpty = (value) => {
  const emptyPattern = /^\s*$/;
  const empty = emptyPattern.test(value);
  const emptyMessage = empty ? 'valid' : 'invalid';
  return {empty, emptyMessage};
};

const isValidName = (name) => {
  const namePattern = /^\s*([A-Za-z]{1,}([\\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
  const validName = namePattern.test(name);
  const nameMessage = validName ? 'valid' : 'invalid';
  return {validName, nameMessage};
};

const isValidPassword = (password) => {   // 1UPcase, numbers and letters, 1 especial character, lenght 8-50 is required
  const passwordPattern = /^(?=.*[0-9])(?=.*[$@$!%*?&()#'"¨_=+-,.;:£¢¬§/\\|<>~^´`])[a-zA-Z0-9$@$!%*?&()#'"¨_=+-,.;:£¢¬§/\\|<>~^´`]{6,15}$/;
  const validPassword = passwordPattern.test(password);
  const passwordMessage = validPassword ? 'valid' : 'invalid';
  return {validPassword, passwordMessage};
};

const isValidEmail = (email) => {
  const emailPattern = /^[^@ ]+@[^@ ]+\.[^@.]{2,}$/;
  const validEmail = emailPattern.test(email);
  const emailMessage = validEmail ? 'valid' : 'invalid';
  return {validEmail, emailMessage};
};

const isValidPhone = (phone) => {   // phonePattern1 = 00 00000-0000 Phone-BR  
  const phonePattern1 = /^\(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579]\\ ?:[2-8]|9[1-9][0-9]{3}\\-[0-9]{4}$/;
  // const phonePattern2 = /^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/;  // phonePattern2 = (000) 000-0000
  const validPhone = phonePattern1.test(phone);
  const ddd = phone.substring(0, 2);
  const phoneMessage = validPhone ? 'valid' : 'invalid';
  return {validPhone, ddd, phoneMessage};
};

const isValidCpf = (cpf) => {  // 000.000.000-00
  const cpfPattern = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
  const validCpf = cpfPattern.test(cpf);
  const cpfMessage = validCpf ? 'valid' : 'invalid';
  return {validCpf, cpfMessage};
};

const isValidCnpj = (cnpj) => {  // 000.000/0000-00
  const cnpjPattern = /^\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  const validCnpj = cnpjPattern.test(cnpj);
  const cnpjMessage = validCnpj ? 'valid' : 'invalid';
  return {validCnpj, cnpjMessage};
};

export {
  isEmpty,
  isValidName,
  isValidPassword,
  isValidEmail,
  isValidPhone,
  isValidCpf,
  isValidCnpj,
};
