export const lengthCheck = (password, setLengthCheckState) => {
    if (password.length >= 8) {
        setLengthCheckState(true);
        return true;
    }
    setLengthCheckState(false);
    return false;
};

export const upperCaseCheck = (password, setUpperCaseCheck) => {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase()) {
            setUpperCaseCheck(true);
            return true;
        }
    }
    setUpperCaseCheck(false);
    return false;
};

export const lowerCaseCheck = (password, setLowerCaseCheck) => {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toLowerCase()) {
            setLowerCaseCheck(true);
            return true;
        }
    }
    setLowerCaseCheck(false);
    return false;
};

export const isNumberCheck = (password, setIsNumberCheck) => {
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            setIsNumberCheck(true);
            return true;
        }
    }
    setIsNumberCheck(false);
    return false;
};

const isLetter = /^\p{L}$/u;

export const isLatinCheck = (password, setIsLatinCheck) => {
    for (let i = 0; i < password.length; i++) {
        if (isLetter.test(password[i]) && !/[a-zA-Z]/.test(password[i])) {
            setIsLatinCheck(false);
            return false;
        }
    }

    setIsLatinCheck(password.length > 0 ? true : false);
    return password.length > 0 ? true : false;
};

export const isSpecialSymbol = (password, setIsSpecialSymbol) => {
    const isContainsSymbol = password.match(/[!@#$%^&()_+?]/);

    setIsSpecialSymbol(isContainsSymbol ? true : false);
    return isContainsSymbol ? true : false;
};
