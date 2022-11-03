const { randomInt } = require("node:crypto");

const generateRandomCode = (length: number) => {
  return randomInt(Math.pow(10, length) - 1).toString().padStart(length, "0");
};

export default generateRandomCode;
