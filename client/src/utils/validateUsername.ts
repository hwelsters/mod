const validUsername = /^([a-z0-9A-Z]|[_](?![_])){1,20}$/;

const validateUsername = (username: string) => {
  return validUsername.test(username);
};

export default validateUsername;
