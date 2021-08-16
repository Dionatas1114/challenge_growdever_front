import message from './validationMessages';

const isEmpty = (value) => {
  const emptyPattern = /^\s*$/;
  const empty = emptyPattern.test(value);
  const emptyMsg = empty ? message.empty : '';
  return emptyMsg;
};

const isValidPassword = (password) => {
  // 1UPcase, numbers and letters, 1 especial character, lenght 8-50 is required
  const passwordPattern =
    /^(?=\D*\d)(?=[^a-z][a-z])(?=[^A-Z][A-Z])(?=.[0-9])(?=.[$@$!%*?&()#'"¨_=+-,.;:£¢¬§|/\<>~^´`]).{8,50}$/;
  const validPassword = passwordPattern.test(password);
  const passwordMsg = validPassword ? 'message' : '';
  return passwordMsg;
};

const isValidEmail = (email) => {
  const emailPattern = /^[^@ ]+@[^@ ]+\.[^@.]{2,}$/;
  const validEmail = emailPattern.test(email);
  const emailMsg = validEmail ? 'message' : '';
  return emailMsg;
};

const isValidPhone = (phone) => {
  const phonePattern1 =
    /^\(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\ (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/; // 00 00000-0000 Phone-BR
  // const phonePattern2 = /^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/; // (000) 000-0000
  const validPhone = phonePattern1.test(phone);
  const ddd = phone.substring(0, 2);
  const phoneMsg = validPhone ? 'a' : '';
  return phoneMsg;
  console.log(phone, ddd);
};

const isValidCpf = (cpf) => {
  // 000.000.000-00
  const cpfPattern = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
  const validCpf = cpfPattern.test(cpf);
  const cpfMsg = validCpf ? 'a' : '';
  return cpfMsg;
};

const isValidCnpj = (cnpj) => {
  // 000.000/0000-00
  const cnpjPattern = /^\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  const validCnpj = cnpjPattern.test(cnpj);
  const cnpjMsg = validCnpj ? 'a' : '';
  return cnpjMsg;
};

export {
  isEmpty,
  isValidPassword,
  isValidEmail,
  isValidPhone,
  isValidCpf,
  isValidCnpj,
};
