export const lengthCheck = (password: string) => {
    if (password.length >= 8) {
        return true;
    }
    return false;
};

export const upperCaseCheck = (password: string) => {
    if (/[A-Z]/.test(password)) {
        return true;
    }
    return false;
};

export const lowerCaseCheck = (password: string) => {
    if (/[a-z]/.test(password)) {
        return true;
    }
    return false;
};

export const isNumberCheck = (password: string) => {
    if (/[0-9]/.test(password)) {
        return true;
    }
    return false;
};

const isLetter = /^\p{L}$/u;

export const isLatinCheck = (password: string) => {
    for (let i = 0; i < password.length; i++) {
        if (isLetter.test(password[i]) && !/[a-zA-Z]/.test(password[i])) {
            return false;
        }
    }

    return password.length > 0 ? true : false;
};

export const isSpecialSymbol = (password: string) => {
    const isContainsSymbol = password.match(/[!@#$%^&()_+?]/);

    return isContainsSymbol ? true : false;
};

export const passwordValidator = (
    password: string,
    lengthCheckState: boolean,
    upperCaseCheckState: boolean,
    lowerCaseCheckState: boolean,
    isNumberCheckState: boolean,
    isLatinCheckState: boolean,
    isSpecialSymbolState: boolean,
    setErrorMessage: (text: string) => void
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
    return false;
};
