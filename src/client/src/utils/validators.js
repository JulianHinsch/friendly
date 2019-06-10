export const validateEmail = (userInput) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
    if(userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(!emailRegex.test(userInput)) return { isValid: false, message: 'Please enter a valid email' }
    return { isValid: true };
}
    
export const validateName = (userInput) => {
    const nameRegex = /^[A-Za-z- ]/;
    if(userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(!nameRegex.test(userInput)) return { isValid: false, message: 'Please enter a valid name' }
    return { isValid: true };
}

export const validatePhone = (userInput) => {
    const phoneRegex = /^/;
    if (userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(!phoneRegex.test(userInput)) return { isValid: false, message: 'Please enter a valid phone number' }
    return { isValid: true };
}

export const validatePassword = (userInput) => {
    if(userInput === '') return { isValid: false, message: 'This field cannot be empty' };
    if(/\s/g.test(userInput)) return { isValid: false, message: 'Password cannot contain spaces' };    
    if(userInput.length < 12) return { isValid: false, message: 'Password must be at least 12 characters' };
    if(userInput.length > 50) return { isValid: false, message: 'Password cannot be greater than 50 characters' };
    if(userInput.toUpperCase() === userInput) return { isValid: false, message: 'Password must contain a lowercase character' };
    if(userInput.toLowerCase() === userInput) return { isValid: false, message: 'Password must contain an uppercase character' };
    if(!/\d/.test(userInput)) return { isValid: false, message: 'Password must contain a number' };
    if(!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(userInput)) return { isValid: false, message: 'Password must contain a special character' };
    return { isValid: true };
}
