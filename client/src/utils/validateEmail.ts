const validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validateEmail = (email: string) => {
  return validEmail.test(email);
};

export default validateEmail;
