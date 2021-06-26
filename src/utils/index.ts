import { cpf } from 'cpf-cnpj-validator';

export const validateEmail = (email: string) => {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  return !!reg.test(email);
};

export const validateCpf = (number: string) => {
  return cpf.isValid(number);
};
