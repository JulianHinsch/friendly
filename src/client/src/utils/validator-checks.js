
const isNotEmpty = (userInput) => {
    return { isValid: userInput !== '', message: 'This field cannot be empty' };
}

const isValidEmail = (userInput) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
    return { isValid: emailRegex.test(userInput), message: 'Please enter a valid email' }
}

const isValidName = (userInput) => {
    const nameRegex = /^[A-Za-z- ]/;
    return { isValid: nameRegex.test(userInput), message: 'Please enter a valid name' }
};

const isValidPhone = (userInput) => {

};
const isLessThan50Characters = (userInput) => {};
const isMoreThan12Characters = (userInput) => {}
const containsNumber = (userInput) => {}

export default class Validator {

    validate = (userInput, [ ...checks ]) => {
        for(let i = 0; i < checks.length; i++) {
            let { isValid, message } = checks[i](userInput);
            if(!isValid) {
                return { isValid, message }
            }
        }
        return { isValid: true }
    }

    validateEmail = (userInput) => validate(userInput, [ 
        isNotEmpty,
        isValidEmail,
    ]);

    validateName = (userInput) => validate(userInput, [
        isNotEmpty,
        isValidName,
    ]);

    validatePhone = (userInput) => validate(userInput, [
        isNotEmpty,
        isValidPhone,
    ]);

    validatePassword = (userInput) => validate(userInput, [
        isNotEmpty,
        doesNotContainSpaces,
        isMoreThan12Characters,
        isLessThan50Characters,
        containsUppercaseCharacter,
        containsLowercaseCharacter,
        containsNumber,        
        containsSpecialCharacter,
    ])
}

/*

validateEmail = (userInput) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
    if(userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(!emailRegex.test(userInput)) return { isValid: false, message: 'Please enter a valid email' }
    return { isValid: true };
}

validateName = (userInput) => {
    if(userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(!nameRegex.test(userInput)) return { isValid: false, message: 'Please enter a valid name' }
    return { isValid: true };
}

validatePhone = (userInput) => {
    const phoneRegex = /^/;
    if (userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(!phoneRegex.test(userInput)) return { isValid: false, message: 'Please enter a valid phone number' }
    return { isValid: true };
}

validatePassword = (password) => {
    if(password === '') return { isValid: false, message: 'This field cannot be empty' };
    if(/\s/g.test(password)) return { isValid: false, message: 'Password cannot contain spaces' };    
    if(password.length < 12) return { isValid: false, message: 'Password must be at least 12 characters' };
    if(password.length > 50) return { isValid: false, message: 'Password cannot be greater than 50 characters' };
    if(password.toUpperCase() === password) return { isValid: false, message: 'Password must contain a lowercase character' };
    if(password.toLowerCase() === password) return { isValid: false, message: 'Password must contain an uppercase character' };
    if(!/\d/.test(password)) return { isValid: false, message: 'Password must contain a number' };
    if(!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password)) return { isValid: false, message: 'Password must contain a special character' };
    return true;
}

*/