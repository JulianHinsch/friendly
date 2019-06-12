export const validateEmail = (userInput) => {
    userInput = userInput.trim();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
    if(userInput === '') return 'This field cannot be empty';
    if(!emailRegex.test(userInput)) return 'Please enter a valid email'
    return '';
}
    
export const validateName = (userInput) => {
    userInput = userInput.trim();    
    const nameRegex = /^[A-Za-z ]+(-[ A-Za-z]+)*$/;
    if(userInput === '') return 'This field cannot be empty';
    if(!nameRegex.test(userInput)) return 'Please enter a valid name'
    return '';
}

export const validatePassword = (userInput) => {
    userInput = userInput.trim();    
    if(userInput === '') return 'This field cannot be empty';
    if(/\s/g.test(userInput)) return 'Password cannot contain spaces';    
    if(userInput.length < 12) return 'Password must be at least 12 characters';
    if(userInput.length > 50) return 'Password cannot be greater than 50 characters';
    if(userInput.toUpperCase() === userInput) return 'Password must contain a lowercase character';
    if(userInput.toLowerCase() === userInput) return 'Password must contain an uppercase character';
    if(!/\d/.test(userInput)) return 'Password must contain a number';
    if(!/[-!$%^&*()_+|~=`{}[\]:";'<>?,./]/.test(userInput)) return 'Password must contain a special character';
    return '';
}
