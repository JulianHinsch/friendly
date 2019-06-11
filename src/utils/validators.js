const validateName = (name) => {
    if(!/./.test(name)) return false;
    return true;
}

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

const validatePassword = (password) => {
    if(/\s/g.test(password)) return false; //whitespace    
    if(password.length < 12) return false; //too short
    if(password.length > 50) return false; //too long
    if(password.toUpperCase() === password) return false; //no lowercase
    if(password.toLowerCase() === password) return false; //no uppercase
    if(!/\d/.test(password)) return false; //no number
    if(!/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password)) return false; //no special char
    return true;
}

module.exports = {
    validateName,
    validateEmail,
    validatePassword,
}