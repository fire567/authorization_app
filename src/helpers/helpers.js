export const lengthCheck = (password) => {
    if (password.length >= 8) {
        return true;
    }
    return false;
};

export const upperCaseCheck = (password) => {
    if (/[A-Z]/.test(password)) {
        return true;
    }
    return false;
};

export const lowerCaseCheck = (password) => {
    if (/[a-z]/.test(password)) {
        return true;
    }
    return false;
};

export const isNumberCheck = (password) => {
    if (/[0-9]/.test(password)) {
        return true;
    }
    return false;
};

const isLetter = /^\p{L}$/u;

export const isLatinCheck = (password) => {
    for (let i = 0; i < password.length; i++) {
        if (isLetter.test(password[i]) && !/[a-zA-Z]/.test(password[i])) {
            return false;
        }
    }

    return password.length > 0 ? true : false;
};

export const isSpecialSymbol = (password) => {
    const isContainsSymbol = password.match(/[!@#$%^&()_+?]/);

    return isContainsSymbol ? true : false;
};

export const passwordValidator = (
    password,
    lengthCheckState,
    upperCaseCheckState,
    lowerCaseCheckState,
    isNumberCheckState,
    isLatinCheckState,
    isSpecialSymbolState,
    setErrorMessage
) => {
    if (password.length >= 8) {
        if (
            lengthCheckState &&
            upperCaseCheckState &&
            lowerCaseCheckState &&
            isNumberCheckState &&
            isLatinCheckState &&
            isSpecialSymbolState
        ) {
            setErrorMessage("");
            return true;
        } else {
            return false;
        }
    }
};
