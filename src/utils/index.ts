export const validateEmail = (email: string) => {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  return !!reg.test(email);
};
