// The password is at least 8 characters long
// The password has at least one uppercase letter
// The password has at least one lowercase letter
// The password has at least one digit
// The password has at least one special character

let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\|])(?=.{8,})/;

const validatePassword = (password: string) => {
  return strongPassword.test(password);
};

export default validatePassword;
