const {randomInt} = require("node:crypto");

const generateRandomCode = (length: number) => {
    return randomInt(1000_000).toString().padStart(6, '0');
};

export default generateRandomCode;