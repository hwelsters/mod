export const hasLowerCase = (password: string) => {
    const lowercase = /^(?=.*[a-z])/;
    return lowercase.test(password);
}

export const hasUpperCase = (password: string) => {
    const uppercase = /^(?=.*[A-Z])/;
    return uppercase.test(password);
}

export const hasSpecialChars = (password : string) => {
    const specialChars = /^(?=.*[!@#\$%\^&\*\|])/
    return specialChars.test(password);
}

export const hasEightLetters = (password: string) => {
    return password.length >= 8;
}

export const isMatching = (password: string, confirmPassword: string) => {
    if (password == "" || confirmPassword == "") return false;
    return password == confirmPassword;
}