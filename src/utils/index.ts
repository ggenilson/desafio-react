import { cpf } from 'cpf-cnpj-validator';

export const validateEmail = (email: string) => {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  return !!reg.test(email);
};

export const validateCpf = (number: string) => {
  return cpf.isValid(number);
};

export const formatCpf = (number: string) => {
  return cpf.format(number);
};

export const getSmsEmail = (email: string = '') => {
  const part1 = `${email.substring(
    email.indexOf('@') - 3,
    email.indexOf('@')
  )}@${email.split('@')[1]}`;

  return `O link de confirmação foi enviado para o email *******${part1}`;
};
