function validateForm() {
    const name = document.getElementById('name').value.trim();
    const business = document.getElementById('business').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value; // Use lowercase 'password'
    const country = document.getElementById('country').value.trim(); // Get country value

    let isValid = true;

    if (!isValidEmail(email)) {
        isValid = false;
        displayError('email', 'Please enter a valid email');
    } else {
        clearError('email');
    }

    if (business === '') {
        isValid = false;
        displayError('business', 'Please enter your business name');
    } else {
        clearError('business');
    }

    if (name === '') {
        isValid = false;
        displayError('name', 'Please enter your name');
    } else {
        clearError('name');
    }

    if (country === '') {
        isValid = false;
        displayError('country', 'Please select your country');
    } else {
        clearError('country');
    }

    if(password.length < 8){
        isValid = false;
        displayError('password', 'Password must be at least 8 characters long.');
    }else{
        clearError('password');
    }

    return isValid;
}

function displayError(fieldId, message){
    let errorElement = document.getElementById(fieldId + 'Error')
    document.getElementById (fieldId + 'Error')

    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.id = fieldId + 'Error'; 
        errorElement.className = 'error';
        const field = document.getElementById(fieldId);
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }

    errorElement.textContent = message;

}

function clearError(fieldId) {
    let errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}



document.getElementById('myForm').addEventListener('submit', function(event) {
    if (validateForm()) { // Prevent submission if validation fails
        event.preventDefault();
        window.location.href = 'success.html'; // Redirect only i
    } /* else {
        window.location.href = 'success.html'; // Redirect only if valid
    } */
});

// Email validation function
function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
